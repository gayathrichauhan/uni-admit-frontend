"use client";

import Link from "next/link";

const actions = [
    {
        title: "Complete Profile",
        description: "Update your personal and academic information.",
        href: "/student/profile",
    },
    {
        title: "Admission Application",
        description: "Start or continue your admission application.",
        href: "/student/application",
    },
    {
        title: "Upload Documents",
        description: "Upload required certificates and documents.",
        href: "/student/documents",
    },
    {
        title: "Track Status",
        description: "Check your application progress.",
        href: "/student/status",
    },
];

export default function QuickActions() {
    return (
        <section className="space-y-5">

            <div>
                <h2 className="text-2xl font-semibold text-slate-900">
                    Quick Actions
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Access frequently used admission services.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">

                {actions.map((action) => (
                    <Link
                        key={action.title}
                        href={action.href}
                        className="group rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
                    >
                        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-700">
                            {action.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            {action.description}
                        </p>

                        <p className="mt-5 text-sm font-medium text-slate-900">
                            Open →
                        </p>

                    </Link>
                ))}

            </div>

        </section>
    );
}