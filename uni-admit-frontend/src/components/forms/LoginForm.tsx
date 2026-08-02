"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "@/validations/authSchemas";
import { LoginRequest } from "@/types";
import { useAuthStore } from "@/store/authStore";

import { Button } from "@/components/ui/button";

export default function LoginForm() {
    const router = useRouter();

    const loginUser = useAuthStore((state) => state.login);

    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginRequest>({
        resolver: zodResolver(loginSchema),
    });

    async function onSubmit(data: LoginRequest) {
        try {
            setLoading(true);
            setServerError("");

            await loginUser(data);

            const role = useAuthStore.getState().role;

            alert("Login Successful!");

            if (role === "ROLE_ADMIN") {
                router.push("/admin");
            } else {
                router.push("/student");
            }

        } catch (err: any) {
            setServerError(
                err?.response?.data?.detail ??
                err?.response?.data?.message ??
                err?.response?.data?.error ??
                "Invalid email or password."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-lg">

            <h1 className="text-3xl font-bold">
                Welcome Back
            </h1>

            <p className="mt-2 mb-8 text-muted-foreground">
                Login to Uni Admit Portal
            </p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
            >

                <div>
                    <label className="text-sm font-medium">
                        Email
                    </label>

                    <input
                        {...register("email")}
                        placeholder="Enter email"
                        className="mt-2 h-11 w-full rounded-lg border px-4"
                    />

                    <p className="mt-1 text-sm text-red-500">
                        {errors.email?.message}
                    </p>
                </div>

                <div>
                    <label className="text-sm font-medium">
                        Password
                    </label>

                    <input
                        type="password"
                        {...register("password")}
                        placeholder="Enter password"
                        className="mt-2 h-11 w-full rounded-lg border px-4"
                    />

                    <p className="mt-1 text-sm text-red-500">
                        {errors.password?.message}
                    </p>
                </div>

                {serverError && (
                    <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                        {serverError}
                    </div>
                )}

                <Button
                    type="submit"
                    className="w-full h-11"
                    disabled={loading}
                >
                    {loading ? "Signing In..." : "Login"}
                </Button>

            </form>

        </div>
    );
}