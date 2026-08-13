"use client";

import { useEffect, useState } from "react";
import { Folder, Upload, FileText, AlertCircle, Loader2, FileCheck } from "lucide-react";
import { useDocumentStore, StudentDocument } from "@/store/documentStore";
import api from "@/lib/axios"; // Uses your configured Axios instance with Auth headers

// Document Upload Form Component with API Call
function DocumentUpload({ onSuccess }: { onSuccess: () => void }) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [docType, setDocType] = useState("TRANSCRIPT");
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState<string | null>(null);

    const handleUpload = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedFile) return;

        try {
            setUploading(true);
            setUploadError(null);

            const formData = new FormData();
            formData.append("file", selectedFile);
            formData.append("documentType", docType);

            // Calls your backend Spring Boot endpoint
            await api.post("/documents/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            // Reset selection and trigger document re-fetch
            setSelectedFile(null);
            onSuccess();
        } catch (err: any) {
            setUploadError(
                err?.response?.data?.message ||
                err?.response?.data?.error ||
                "Failed to upload document. Please try again."
            );
        } finally {
            setUploading(false);
        }
    };

    return (
        <form onSubmit={handleUpload} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Document Type
                    </label>
                    <select
                        value={docType}
                        onChange={(e) => setDocType(e.target.value)}
                        className="w-full h-10 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 focus:border-slate-900 focus:bg-white focus:outline-none"
                    >
                        <option value="TRANSCRIPT">Academic Transcript</option>
                        <option value="PASSPORT">Passport / ID</option>
                        <option value="RECOMMENDATION">Letter of Recommendation</option>
                        <option value="OTHER">Other Support Document</option>
                    </select>
                </div>

                <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        File
                    </label>
                    <input
                        type="file"
                        onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                        className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-slate-900 file:text-white hover:file:bg-slate-800 cursor-pointer"
                    />
                </div>
            </div>

            {uploadError && (
                <div className="rounded-lg border border-rose-200 bg-rose-50 p-3 text-xs text-rose-700 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-rose-600 shrink-0" />
                    <span>{uploadError}</span>
                </div>
            )}

            <button
                type="submit"
                disabled={!selectedFile || uploading}
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
            >
                {uploading ? (
                    <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Uploading...</span>
                    </>
                ) : (
                    <>
                        <Upload className="h-4 w-4" />
                        <span>Upload Document</span>
                    </>
                )}
            </button>
        </form>
    );
}

// Document List Component
function DocumentList({ documents }: { documents: StudentDocument[] }) {
    if (!documents || documents.length === 0) {
        return (
            <div className="text-center py-8 text-slate-500 text-sm">
                <FileText className="h-8 w-8 mx-auto text-slate-300 mb-2" />
                No documents uploaded yet.
            </div>
        );
    }

    return (
        <div className="divide-y divide-slate-100">
            {documents.map((doc) => (
                <div key={doc.id} className="py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <FileCheck className="h-5 w-5 text-emerald-600" />
                        <div>
                            <p className="text-sm font-semibold text-slate-900">{doc.fileName}</p>
                            <p className="text-xs text-slate-500">{doc.documentType}</p>
                        </div>
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        {doc.status || "Uploaded"}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default function StudentDocumentsPage() {
    const { documents, fetchDocuments, loading, error } = useDocumentStore();

    useEffect(() => {
        fetchDocuments();
    }, [fetchDocuments]);

    return (
        <div className="max-w-5xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                    Document Management
                </h1>
                <p className="mt-2 text-sm text-slate-500">
                    Upload and manage required verification documents for your university application.
                </p>
            </div>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Upload className="h-5 w-5 text-slate-700" />
                    Upload New Document
                </h2>
                <DocumentUpload onSuccess={fetchDocuments} />
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Folder className="h-5 w-5 text-slate-700" />
                    Uploaded Documents
                </h2>

                {loading ? (
                    <div className="flex items-center justify-center py-12 text-slate-500 text-sm gap-2">
                        <Loader2 className="h-5 w-5 animate-spin text-slate-700" />
                        <span>Loading documents...</span>
                    </div>
                ) : error ? (
                    <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-xs text-rose-700 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-rose-600 shrink-0" />
                        <span>{error}</span>
                    </div>
                ) : (
                    <DocumentList documents={documents} />
                )}
            </section>
        </div>
    );
}