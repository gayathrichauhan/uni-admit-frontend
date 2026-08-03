"use client";

import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    ProfileRequest,
    ProfileResponse,
} from "@/types";

import {
    profileSchema,
    ProfileFormData,
} from "@/validations/profileSchema";

import { useProfileStore } from "@/store/profileStore";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ProfileForm() {
    const {
        profile,
        loading,
        error,
        createProfile,
        updateProfile,
        getMyProfile,
    } = useProfileStore();

    const [successMessage, setSuccessMessage] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ProfileFormData>({
        resolver: zodResolver(profileSchema),

        defaultValues: {
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            country: "",
            tenthPercentage: 0,
            twelfthPercentage: 0,
        },
    });

    useEffect(() => {
        async function loadProfile() {
            try {
                await getMyProfile();
            } catch {
                // Ignore if profile doesn't exist yet.
            }
        }

        loadProfile();
    }, [getMyProfile]);

    useEffect(() => {
        if (!profile) return;

        reset({
            firstName: profile.firstName,
            lastName: profile.lastName,
            dateOfBirth: profile.dateOfBirth,
            phone: profile.phone,
            address: profile.address,
            city: profile.city,
            state: profile.state,
            country: profile.country,
            tenthPercentage: profile.tenthPercentage,
            twelfthPercentage: profile.twelfthPercentage,
        });
    }, [profile, reset]);

    async function onSubmit(data: ProfileFormData) {
        try {
            setSuccessMessage("");

            const payload: ProfileRequest = {
                ...data,
                tenthPercentage: Number(data.tenthPercentage),
                twelfthPercentage: Number(data.twelfthPercentage),
            };

            if (profile) {
                await updateProfile(payload);

                setSuccessMessage(
                    "✅ Profile updated successfully."
                );
            } else {
                await createProfile(payload);

                setSuccessMessage(
                    "✅ Profile created successfully."
                );
            }
        } catch {
            // handled by store
        }
    }

    return (
        <Card className="rounded-2xl p-8 shadow-lg">

            <h2 className="mb-2 text-3xl font-bold">
                Student Profile
            </h2>

            <p className="mb-8 text-muted-foreground">
                Complete your personal and academic details.
            </p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-6 md:grid-cols-2"
            >

                <div>
                    <label className="font-medium">
                        First Name
                    </label>

                    <input
                        {...register("firstName")}
                        className="mt-2 h-11 w-full rounded-lg border px-4"
                    />

                    <p className="text-sm text-red-500">
                        {errors.firstName?.message}
                    </p>
                </div>

                <div>
                    <label className="font-medium">
                        Last Name
                    </label>

                    <input
                        {...register("lastName")}
                        className="mt-2 h-11 w-full rounded-lg border px-4"
                    />

                    <p className="text-sm text-red-500">
                        {errors.lastName?.message}
                    </p>
                </div>

                <div>
                    <label className="font-medium">
                        Date of Birth
                    </label>

                    <input
                        type="date"
                        {...register("dateOfBirth")}
                        className="mt-2 h-11 w-full rounded-lg border px-4"
                    />

                    <p className="text-sm text-red-500">
                        {errors.dateOfBirth?.message}
                    </p>
                </div>

                <div>
                    <label className="font-medium">
                        Phone
                    </label>

                    <input
                        {...register("phone")}
                        className="mt-2 h-11 w-full rounded-lg border px-4"
                    />

                    <p className="text-sm text-red-500">
                        {errors.phone?.message}
                    </p>
                </div>

                <div className="md:col-span-2">
                    <label className="font-medium">
                        Address
                    </label>

                    <textarea
                        {...register("address")}
                        className="mt-2 min-h-[100px] w-full rounded-lg border p-4"
                    />

                    <p className="text-sm text-red-500">
                        {errors.address?.message}
                    </p>
                </div>

                <div>
                    <label className="font-medium">
                        City
                    </label>

                    <input
                        {...register("city")}
                        className="mt-2 h-11 w-full rounded-lg border px-4"
                    />

                    <p className="text-sm text-red-500">
                        {errors.city?.message}
                    </p>
                </div>

                <div>
                    <label className="font-medium">
                        State
                    </label>

                    <input
                        {...register("state")}
                        className="mt-2 h-11 w-full rounded-lg border px-4"
                    />

                    <p className="text-sm text-red-500">
                        {errors.state?.message}
                    </p>
                </div>

                <div>
                    <label className="font-medium">
                        Country
                    </label>

                    <input
                        {...register("country")}
                        className="mt-2 h-11 w-full rounded-lg border px-4"
                    />

                    <p className="text-sm text-red-500">
                        {errors.country?.message}
                    </p>
                </div>

                <div>
                    <label className="font-medium">
                        10th Percentage
                    </label>

                    <input
                        type="number"
                        step="0.01"
                        {...register("tenthPercentage")}
                        className="mt-2 h-11 w-full rounded-lg border px-4"
                    />

                    <p className="text-sm text-red-500">
                        {errors.tenthPercentage?.message}
                    </p>
                </div>

                <div>
                    <label className="font-medium">
                        12th Percentage
                    </label>

                    <input
                        type="number"
                        step="0.01"
                        {...register("twelfthPercentage")}
                        className="mt-2 h-11 w-full rounded-lg border px-4"
                    />

                    <p className="text-sm text-red-500">
                        {errors.twelfthPercentage?.message}
                    </p>
                </div>

                {error && (
                    <div className="md:col-span-2 rounded-lg border border-red-200 bg-red-50 p-4 text-red-600">
                        {error}
                    </div>
                )}

                {successMessage && (
                    <div className="md:col-span-2 rounded-lg border border-green-200 bg-green-50 p-4 text-green-700">
                        {successMessage}
                    </div>
                )}

                <div className="md:col-span-2 flex justify-end">

                    <Button
                        type="submit"
                        disabled={loading}
                        className="h-11 px-8"
                    >
                        {loading
                            ? "Saving..."
                            : profile
                                ? "Update Profile"
                                : "Create Profile"}
                    </Button>

                </div>

            </form>

        </Card>
    );
}