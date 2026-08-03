import Link from "next/link";

import DashboardHeader from "@/components/student/DashboardHeader";
import StatsCards from "@/components/student/StatsCards";
import QuickActions from "@/components/student/QuickActions";

export default function StudentDashboardPage() {
    return (
        <main className="min-h-screen bg-slate-50">

            {/* Top Navigation */}
            <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">

                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                    <div className="flex items-center gap-12">

                        <Link
                            href="/student"
                            className="text-2xl font-bold tracking-tight text-slate-900"
                        >
                            Uni Admit
                        </Link>

                        <nav className="hidden items-center gap-8 md:flex">

                            <Link
                                href="/student"
                                className="text-sm font-medium text-slate-900 transition hover:text-slate-600"
                            >
                                Dashboard
                            </Link>

                            <Link
                                href="/student/profile"
                                className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
                            >
                                Profile
                            </Link>

                            <Link
                                href="/student/application"
                                className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
                            >
                                Application
                            </Link>

                            <Link
                                href="/student/documents"
                                className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
                            >
                                Documents
                            </Link>

                            <Link
                                href="/student/status"
                                className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
                            >
                                Status
                            </Link>

                        </nav>

                    </div>

                    <div className="flex items-center gap-3">

                        <button className="rounded-xl border px-4 py-2 text-sm font-medium transition hover:bg-slate-100">
                            Logout
                        </button>

                    </div>

                </div>

            </header>

            {/* Dashboard Content */}

            <section className="mx-auto max-w-7xl space-y-8 px-6 py-8">

                <DashboardHeader />

                <StatsCards />

                <QuickActions />

            </section>

        </main>
    );
}