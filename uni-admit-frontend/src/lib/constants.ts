/**
 * ============================================================================
 * Uni Admit Frontend
 * Global Constants
 * ============================================================================
 *
 * This file contains application-wide constant values.
 * Keep only values that are reused across multiple modules.
 */

/**
 * Application Name
 */
export const APP_NAME = "Uni Admit";

/**
 * API Gateway Base URL
 *
 * All frontend requests must be routed through the API Gateway.
 *
 * Gateway:
 * http://localhost:8080
 */
export const API_BASE_URL = "http://localhost:8080";

/**
 * Local Storage Keys
 *
 * Used for JWT authentication.
 */
export const ACCESS_TOKEN_KEY = "accessToken";
export const REFRESH_TOKEN_KEY = "refreshToken";