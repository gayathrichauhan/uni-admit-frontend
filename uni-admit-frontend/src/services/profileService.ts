import api from "@/lib/axios";
import {
    ProfileRequest,
    ProfileResponse,
} from "@/types";

const PROFILE_BASE = "/profile";

const profileService = {
    /**
     * Create Student Profile
     * POST /profile
     */
    async createProfile(
        request: ProfileRequest
    ): Promise<ProfileResponse> {
        const { data } = await api.post<ProfileResponse>(
            PROFILE_BASE,
            request
        );

        return data;
    },

    /**
     * Get Logged-in Student Profile
     * GET /profile/me
     */
    async getMyProfile(): Promise<ProfileResponse> {
        const { data } = await api.get<ProfileResponse>(
            `${PROFILE_BASE}/me`
        );

        return data;
    },

    /**
     * Get Profile By Profile ID
     * GET /profile/{profileId}
     */
    async getProfileById(
        profileId: string
    ): Promise<ProfileResponse> {
        const { data } = await api.get<ProfileResponse>(
            `${PROFILE_BASE}/${profileId}`
        );

        return data;
    },

    /**
     * Update Logged-in Student Profile
     * PUT /profile/me
     */
    async updateProfile(
        request: ProfileRequest
    ): Promise<ProfileResponse> {
        const { data } = await api.put<ProfileResponse>(
            `${PROFILE_BASE}/me`,
            request
        );

        return data;
    },
};

export default profileService;