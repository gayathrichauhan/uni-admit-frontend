"use client";

import { useMemo } from "react";
import { useAuthStore } from "@/store/authStore";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
    onLogout?: () => void;
}

export default function DashboardHeader({
                                            onLogout,
                                        }: DashboardHeaderProps) {

    const email = useAuthStore((state) => state.email);

    const greeting = useMemo(() => {
        const hour = new Date().getHours();

        if (hour < 12) return "Good Morning";
        if (hour < 17) return "Good Afternoon";
        return "Good Evening";
    }, []);

    const today = useMemo(() => {
        return new Intl.DateTimeFormat("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(new Date());
    }, []);

    return (
        <header className="rounded-3xl border bg-white p-8 shadow-sm">

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                <div className="space-y-2">

                    <p className="text-sm font-medium tracking-wide text-slate-500">
                        {today}
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                        {greeting}
                    </h1>

                    <p className="text-base text-slate-600">
                        {email ?? "Student"}
                    </p>

                    <p className="pt-2 text-sm text-slate-500">
                        Continue your admission process and keep your application
                        up to date.
                    </p>

                </div>

                <div className="flex items-center gap-3">

                    <Button
                        variant="outline"
                        className="rounded-xl"
                        onClick={onLogout}
                    >
                        Logout
                    </Button>

                </div>

            </div>

        </header>
    );
}