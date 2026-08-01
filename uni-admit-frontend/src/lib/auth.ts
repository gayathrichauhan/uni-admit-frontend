/**
 * ============================================================================
 * Uni Admit Frontend
 * Authentication Utilities
 * ============================================================================
 *
 * Handles JWT token storage and retrieval.
 * Mirrors backend JWT authentication flow.
 */

import { STORAGE_KEYS } from "./constants";

/* ==========================================================================
   ACCESS TOKEN
   ========================================================================== */

/**
 * Save Access Token
 */
export const setAccessToken = (token: string): void => {
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
};

/**
 * Get Access Token
 */
export const getAccessToken = (): string | null => {
    return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
};

/**
 * Remove Access Token
 */
export const removeAccessToken = (): void => {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
};

/* ==========================================================================
   REFRESH TOKEN
   ========================================================================== */

/**
 * Save Refresh Token
 */
export const setRefreshToken = (token: string): void => {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, token);
};

/**
 * Get Refresh Token
 */
export const getRefreshToken = (): string | null => {
    return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
};

/**
 * Remove Refresh Token
 */
export const removeRefreshToken = (): void => {
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
};

/* ==========================================================================
   TOKEN MANAGEMENT
   ========================================================================== */

/**
 * Save Authentication Tokens
 */
export const saveTokens = (
    accessToken: string,
    refreshToken: string
): void => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
};

/**
 * Remove All Authentication Tokens
 */
export const clearTokens = (): void => {
    removeAccessToken();
    removeRefreshToken();
};

/**
 * Check Authentication Status
 */
export const isAuthenticated = (): boolean => {
    return !!getAccessToken();
};

/**
 * Logout User
 */
export const logout = (): void => {
    clearTokens();
};