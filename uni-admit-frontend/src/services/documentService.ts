import api from "@/lib/axios";
import { DocumentResponse } from "@/types";

const DOCUMENT_BASE = "/docs";

const documentService = {
    /**
     * Upload Document
     * POST /docs/upload
     */
    async uploadDocument(
        applicationId: string,
        documentType: string,
        file: File
    ): Promise<DocumentResponse> {
        const formData = new FormData();

        formData.append("applicationId", applicationId);
        formData.append("documentType", documentType);
        formData.append("file", file);

        const { data } = await api.post<DocumentResponse>(
            `${DOCUMENT_BASE}/upload`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        return data;
    },

    /**
     * Get Document By ID
     * GET /docs/{documentId}
     */
    async getDocument(
        documentId: string
    ): Promise<DocumentResponse> {
        const { data } = await api.get<DocumentResponse>(
            `${DOCUMENT_BASE}/${documentId}`
        );

        return data;
    },

    /**
     * Get Documents For Application
     * GET /docs/application/{applicationId}
     */
    async getDocumentsByApplication(
        applicationId: string
    ): Promise<DocumentResponse[]> {
        const { data } = await api.get<DocumentResponse[]>(
            `${DOCUMENT_BASE}/application/${applicationId}`
        );

        return data;
    },

    /**
     * Get Logged-in Student Documents
     * GET /docs/my
     */
    async getMyDocuments(): Promise<DocumentResponse[]> {
        const { data } = await api.get<DocumentResponse[]>(
            `${DOCUMENT_BASE}/my`
        );

        return data;
    },

    /**
     * Delete Document
     * DELETE /docs/{documentId}
     */
    async deleteDocument(
        documentId: string
    ): Promise<void> {
        await api.delete(
            `${DOCUMENT_BASE}/${documentId}`
        );
    },
};

export default documentService;