import Navbar from "@/components/layout/Navbar";

export default function StudentLayout({
                                          children,
                                      }: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen bg-slate-50">

            <Navbar />

            <div className="mx-auto max-w-7xl px-6 py-8">
                {children}
            </div>

        </main>
    );
}