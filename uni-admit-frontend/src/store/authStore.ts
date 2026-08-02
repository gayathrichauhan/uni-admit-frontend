"use client";

import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

import authService from "@/services/authService";
import {
    clearTokens,
    getAccessToken,
} from "@/lib/auth";

import {
    LoginRequest,
    RegisterRequest,
} from "@/types";

interface JwtPayload {
    sub: string;
    userId: string;
    role: string;
    exp: number;
    iat: number;
}

interface AuthState {
    isAuthenticated: boolean;
    userId: string |null;
    email: string | null;
    role: string | null;

    initialize: () => void;

    login: (request: LoginRequest) => Promise<void>;

    register: (request: RegisterRequest) => Promise<void>;

    logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    userId: null,
    email: null,
    role: null,

    initialize: () => {
        const token = getAccessToken();

        if (!token) return;

        try {
            const payload = jwtDecode<JwtPayload>(token);

            set({
                isAuthenticated: true,
                userId: payload.userId,
                email: payload.sub,
                role: payload.role,
            });
        } catch {
            clearTokens();

            set({
                isAuthenticated: false,
                userId: null,
                email: null,
                role: null,
            });
        }
    },

    login: async (request) => {
        const response = await authService.login(request);

        const payload = jwtDecode<JwtPayload>(response.accessToken);

        set({
            isAuthenticated: true,
            userId: payload.userId,
            email: payload.sub,
            role: payload.role,
        });
    },

    // ✅ Register ONLY creates account
    register: async (request) => {
        await authService.register(request);
    },

    logout: async () => {
        try {
            await authService.logout();
        } finally {
            clearTokens();

            set({
                isAuthenticated: false,
                userId: null,
                email: null,
                role: null,
            });
        }
    },
}));