import api from "@/lib/axios";
import {
    ApplicationRequest,
    ApplicationResponse,
    StatusUpdateRequest,
} from "@/types";

const APPLICATION_BASE = "/application";

const applicationService = {
    /**
     * Submit Admission Application
     * POST /application
     */
    async submitApplication(
        request: ApplicationRequest
    ): Promise<ApplicationResponse> {
        const { data } = await api.post<ApplicationResponse>(
            APPLICATION_BASE,
            request
        );

        return data;
    },

    /**
     * Get Logged-in Student Applications
     * GET /application/my
     */
    async getMyApplications(): Promise<ApplicationResponse[]> {
        const { data } = await api.get<ApplicationResponse[]>(
            `${APPLICATION_BASE}/my`
        );

        return data;
    },

    /**
     * Get Single Application
     * GET /application/{applicationId}
     */
    async getApplication(
        applicationId: string
    ): Promise<ApplicationResponse> {
        const { data } = await api.get<ApplicationResponse>(
            `${APPLICATION_BASE}/${applicationId}`
        );

        return data;
    },

    /**
     * Get All Applications (Admin)
     * GET /application
     */
    async getAllApplications(): Promise<ApplicationResponse[]> {
        const { data } = await api.get<ApplicationResponse[]>(
            APPLICATION_BASE
        );

        return data;
    },

    /**
     * Review / Update Application Status (Admin)
     * PATCH /application/{applicationId}/status
     */
    async updateApplicationStatus(
        applicationId: string,
        request: StatusUpdateRequest
    ): Promise<ApplicationResponse> {
        const { data } = await api.patch<ApplicationResponse>(
            `${APPLICATION_BASE}/${applicationId}/status`,
            request
        );

        return data;
    },
};

export default applicationService;