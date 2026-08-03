"use client";

import { ProfileResponse } from "@/types";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProfileCardProps {
    profile: ProfileResponse;
    onEdit: () => void;
}

export default function ProfileCard({
                                        profile,
                                        onEdit,
                                    }: ProfileCardProps) {
    return (
        <Card className="rounded-2xl border shadow-lg">

            {/* Header */}
            <div className="flex items-center justify-between border-b p-6">

                <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                        {profile.firstName} {profile.lastName}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Student Profile
                    </p>
                </div>

                <Button onClick={onEdit}>
                    Edit Profile
                </Button>

            </div>

            {/* Body */}
            <div className="grid gap-6 p-6 md:grid-cols-2">

                <Info
                    label="Date of Birth"
                    value={profile.dateOfBirth || "-"}
                />

                <Info
                    label="Phone"
                    value={profile.phone || "-"}
                />

                <Info
                    label="City"
                    value={profile.city || "-"}
                />

                <Info
                    label="State"
                    value={profile.state || "-"}
                />

                <Info
                    label="Country"
                    value={profile.country || "-"}
                />

                <Info
                    label="Status"
                    value={profile.status || "-"}
                />

                <div className="md:col-span-2">
                    <Info
                        label="Address"
                        value={profile.address || "-"}
                    />
                </div>

            </div>

            {/* Academic */}
            <div className="border-t p-6">

                <h3 className="mb-5 text-lg font-semibold">
                    Academic Information
                </h3>

                <div className="grid gap-6 md:grid-cols-2">

                    <div className="rounded-xl border bg-slate-50 p-5">

                        <p className="text-sm text-slate-500">
                            10th Percentage
                        </p>

                        <p className="mt-2 text-3xl font-bold text-blue-600">
                            {profile.tenthPercentage ?? "-"}%
                        </p>

                    </div>

                    <div className="rounded-xl border bg-slate-50 p-5">

                        <p className="text-sm text-slate-500">
                            12th Percentage
                        </p>

                        <p className="mt-2 text-3xl font-bold text-green-600">
                            {profile.twelfthPercentage ?? "-"}%
                        </p>

                    </div>

                </div>

            </div>

        </Card>
    );
}

interface InfoProps {
    label: string;
    value: string | number;
}

function Info({
                  label,
                  value,
              }: InfoProps) {
    return (
        <div>

            <p className="text-sm text-slate-500">
                {label}
            </p>

            <p className="mt-1 text-base font-medium text-slate-900">
                {value}
            </p>

        </div>
    );
}