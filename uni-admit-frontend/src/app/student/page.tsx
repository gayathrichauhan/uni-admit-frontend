import {
    ArrowRight,
    Bell,
    Circle,
    Clock,
    FileText,
    LogOut,
    UploadCloud,
    UserRound,
} from "lucide-react";

export default function StudentDashboardPage() {
    return (
        <main className="min-h-screen bg-slate-50">

            {/* Top Navigation */}
            <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-sm font-semibold text-white">
                            UA
                        </div>
                        <div>
                            <p className="text-[15px] font-semibold leading-none tracking-tight text-slate-900">
                                Uni Admit
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                                Student Admission Portal
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden text-right sm:block">
                            <p className="text-sm font-medium leading-none text-slate-900">
                                Aditi Sharma
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                                Applicant ID • UA-24817
                            </p>
                        </div>
                        <div className="h-9 w-9 rounded-full border border-slate-200 bg-slate-100" />
                        <button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900">
                            <LogOut className="h-3.5 w-3.5" />
                            <span className="hidden sm:inline">Logout</span>
                        </button>
                    </div>
                </div>
            </header>

            <section className="mx-auto max-w-7xl px-6 py-10 md:px-8 md:py-14">

                {/* Hero */}
                <div className="mb-10 flex flex-col justify-between gap-4 border-b border-slate-200 pb-10 md:flex-row md:items-end">
                    <div>
                        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-[34px]">
                            Welcome back, Aditi
                        </h1>
                        <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-slate-500">
                            Your application is 60% complete. Finish the remaining steps below to stay on track for the admission deadline.
                        </p>
                    </div>
                    <button className="inline-flex w-fit items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800">
                        Resume Application
                        <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                </div>

                {/* Statistics */}
                <div className="mb-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    <StatCard
                        label="Profile Status"
                        value="80%"
                        detail="Almost complete"
                        icon={<UserRound className="h-4 w-4" />}
                    />
                    <StatCard
                        label="Application Status"
                        value="In Review"
                        detail="Submitted 3 days ago"
                        icon={<FileText className="h-4 w-4" />}
                    />
                    <StatCard
                        label="Documents Uploaded"
                        value="4 / 6"
                        detail="2 documents pending"
                        icon={<UploadCloud className="h-4 w-4" />}
                    />
                    <StatCard
                        label="Notifications"
                        value="3 New"
                        detail="Last update today"
                        icon={<Bell className="h-4 w-4" />}
                    />
                </div>

                {/* Quick Actions */}
                <div className="mb-12">
                    <div className="mb-5 flex items-center justify-between">
                        <h2 className="text-lg font-semibold tracking-tight text-slate-900">
                            Quick Actions
                        </h2>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        <ActionCard
                            title="Complete Profile"
                            description="Add personal and academic details."
                            icon={<UserRound className="h-4.5 w-4.5" />}
                        />
                        <ActionCard
                            title="Start Admission"
                            description="Fill and submit your application."
                            icon={<FileText className="h-4.5 w-4.5" />}
                        />
                        <ActionCard
                            title="Upload Documents"
                            description="Submit required identity and academic files."
                            icon={<UploadCloud className="h-4.5 w-4.5" />}
                        />
                        <ActionCard
                            title="Track Application"
                            description="Check your current review status."
                            icon={<Clock className="h-4.5 w-4.5" />}
                        />
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid gap-6 lg:grid-cols-3">

                    {/* Recent Activity */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
                        <div className="mb-6 flex items-center justify-between">
                            <h3 className="text-base font-semibold tracking-tight text-slate-900">
                                Recent Activity
                            </h3>
                            <button className="text-xs font-medium text-slate-500 transition hover:text-slate-900">
                                View all
                            </button>
                        </div>

                        <ol className="relative space-y-6 border-l border-slate-200 pl-6">
                            <TimelineItem
                                title="Application submitted for review"
                                time="Today, 9:42 AM"
                                current
                            />
                            <TimelineItem
                                title="Transcript uploaded successfully"
                                time="Yesterday, 4:10 PM"
                            />
                            <TimelineItem
                                title="Profile information updated"
                                time="Aug 1, 11:05 AM"
                            />
                            <TimelineItem
                                title="Identity document verified"
                                time="Jul 29, 2:30 PM"
                            />
                            <TimelineItem
                                title="Account created"
                                time="Jul 26, 10:00 AM"
                                last
                            />
                        </ol>
                    </div>

                    {/* Sidebar: Progress + Notifications */}
                    <div className="space-y-6">

                        {/* Application Progress */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h3 className="mb-6 text-base font-semibold tracking-tight text-slate-900">
                                Application Progress
                            </h3>

                            <div className="space-y-5">
                                <ProgressRow label="Profile" percent={80} />
                                <ProgressRow label="Application Form" percent={60} />
                                <ProgressRow label="Documents" percent={65} />
                                <ProgressRow label="Review" percent={20} />
                            </div>
                        </div>

                        {/* Notifications */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="mb-5 flex items-center justify-between">
                                <h3 className="text-base font-semibold tracking-tight text-slate-900">
                                    Notifications
                                </h3>
                                <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[11px] font-medium text-white">
                                    3
                                </span>
                            </div>

                            <div className="space-y-4">
                                <NotificationRow
                                    title="Document verification pending"
                                    time="2h ago"
                                />
                                <NotificationRow
                                    title="Application moved to review"
                                    time="1d ago"
                                />
                                <NotificationRow
                                    title="New admission deadline posted"
                                    time="3d ago"
                                />
                            </div>
                        </div>

                    </div>
                </div>

            </section>

        </main>
    );
}

function StatCard({
                      label,
                      value,
                      detail,
                      icon,
                  }: {
    label: string;
    value: string;
    detail: string;
    icon: React.ReactNode;
}) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md">
            <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    {label}
                </p>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                    {icon}
                </span>
            </div>
            <p className="font-mono text-2xl font-semibold tracking-tight text-slate-900">
                {value}
            </p>
            <p className="mt-1 text-xs text-slate-500">{detail}</p>
        </div>
    );
}

function ActionCard({
                        title,
                        description,
                        icon,
                    }: {
    title: string;
    description: string;
    icon: React.ReactNode;
}) {
    return (
        <button className="group flex w-full flex-col items-start rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
            <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
                {icon}
            </span>
            <p className="text-sm font-semibold text-slate-900">{title}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                {description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-slate-500 transition group-hover:text-slate-900">
                Get started
                <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
            </span>
        </button>
    );
}

function TimelineItem({
                          title,
                          time,
                          current,
                          last,
                      }: {
    title: string;
    time: string;
    current?: boolean;
    last?: boolean;
}) {
    return (
        <li className="relative">
            <span
                className={`absolute -left-[29px] flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 ${
                    current
                        ? "border-blue-600 bg-blue-600"
                        : last
                            ? "border-slate-300 bg-white"
                            : "border-slate-300 bg-white"
                }`}
            />
            <p
                className={`text-sm ${
                    current ? "font-medium text-slate-900" : "text-slate-700"
                }`}
            >
                {title}
            </p>
            <p className="mt-0.5 text-xs text-slate-400">{time}</p>
        </li>
    );
}

function ProgressRow({ label, percent }: { label: string; percent: number }) {
    return (
        <div>
            <div className="mb-1.5 flex items-center justify-between">
                <p className="text-sm text-slate-700">{label}</p>
                <p className="font-mono text-xs text-slate-500">{percent}%</p>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                    className="h-full rounded-full bg-blue-600 transition-all"
                    style={{ width: `${percent}%` }}
                />
            </div>
        </div>
    );
}

function NotificationRow({ title, time }: { title: string; time: string }) {
    return (
        <div className="flex items-start gap-3">
            <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-100 text-slate-500">
                <Circle className="h-2 w-2 fill-current" />
            </span>
            <div>
                <p className="text-sm text-slate-700">{title}</p>
                <p className="mt-0.5 text-xs text-slate-400">{time}</p>
            </div>
        </div>
    );
}