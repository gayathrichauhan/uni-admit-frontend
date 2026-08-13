import { create } from "zustand";

export interface StudentDocument {
    id: string;
    documentType: string;
    fileName: string;
    fileUrl: string;
    status: string;
    createdAt?: string;
}

interface DocumentState {
    documents: StudentDocument[];
    loading: boolean;
    error: string | null;
    fetchDocuments: () => Promise<void>;
}

export const useDocumentStore = create<DocumentState>((set) => ({
    documents: [],
    loading: false,
    error: null,
    fetchDocuments: async () => {
        set({ loading: true, error: null });
        try {
            // Replace with your actual document fetch API call
            set({ documents: [], loading: false });
        } catch (err: any) {
            set({
                error: err?.message || "Failed to fetch documents",
                loading: false,
            });
        }
    },
}));