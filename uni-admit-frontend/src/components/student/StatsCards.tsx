"use client";

import React from "react";
import { useProfileStore } from "@/store/profileStore";
import { UserCheck, FileText, UploadCloud, Bell } from "lucide-react";

export default function StatsCards() {
    const { profile } = useProfileStore();

    const profileCompleted = !!profile;

    const stats = [
        {
            title: "Profile Status",
            value: profileCompleted ? "100%" : "Incomplete",
            description: profileCompleted
                ? "Profile details complete"
                : "Complete profile to continue",
            icon: UserCheck,
            badge: profileCompleted ? "Complete" : "Action Needed",
            badgeColor: profileCompleted
                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                : "bg-amber-50 text-amber-700 border-amber-200",
            showProgress: true,
        },
        {
            title: "Application",
            value: profileCompleted ? "Ready" : "Not Started",
            description: profileCompleted
                ? "Ready to submit application"
                : "Requires completed profile",
            icon: FileText,
            badge: profileCompleted ? "Active" : "Locked",
            badgeColor: profileCompleted
                ? "bg-blue-50 text-blue-700 border-blue-200"
                : "bg-slate-100 text-slate-600 border-slate-200",
            showProgress: false,
        },
        {
            title: "Documents",
            value: "0 / 8",
            description: "Required certificates uploaded",
            icon: UploadCloud,
            badge: "Pending",
            badgeColor: "bg-slate-100 text-slate-600 border-slate-200",
            showProgress: false,
        },
        {
            title: "Notifications",
            value: "0",
            description: "Unread updates & alerts",
            icon: Bell,
            badge: "Up to date",
            badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
            showProgress: false,
        },
    ];

    return (
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((card) => {
                const Icon = card.icon;

                return (
                    <div
                        key={card.title}
                        className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm"
                    >
                        <div>
                            {/* Card Header: Icon & Badge */}
                            <div className="flex items-center justify-between">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                                    <Icon className="h-5 w-5" aria-hidden="true" />
                                </div>

                                <span
                                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-wide ${card.badgeColor}`}
                                >
                                    {card.badge}
                                </span>
                            </div>

                            {/* Metric Value */}
                            <div className="mt-4">
                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    {card.title}
                                </p>
                                <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900">
                                    {card.value}
                                </h3>
                            </div>

                            <p className="mt-1 text-xs leading-relaxed text-slate-500">
                                {card.description}
                            </p>
                        </div>

                        {/* Progress Indicator for Profile */}
                        {card.showProgress && (
                            <div className="mt-4 pt-2">
                                <div className="flex items-center justify-between text-[11px] font-medium text-slate-400 mb-1.5">
                                    <span>Completion</span>
                                    <span>{profileCompleted ? "100%" : "0%"}</span>
                                </div>
                                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                                    <div
                                        className={`h-full rounded-full transition-all duration-500 ${
                                            profileCompleted ? "w-full bg-emerald-500" : "w-0 bg-amber-500"
                                        }`}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </section>
    );
}