"use client";

export default function StatsCards() {
    const stats = [
        {
            title: "Profile",
            value: "0%",
            description: "Complete your profile",
        },
        {
            title: "Application",
            value: "Not Started",
            description: "Admission application",
        },
        {
            title: "Documents",
            value: "0 / 8",
            description: "Uploaded",
        },
        {
            title: "Notifications",
            value: "0",
            description: "Unread",
        },
    ];

    return (
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((card) => (
                <div
                    key={card.title}
                    className="rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                    <p className="text-sm font-medium text-slate-500">
                        {card.title}
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-slate-900">
                        {card.value}
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                        {card.description}
                    </p>
                </div>
            ))}
        </section>
    );
}