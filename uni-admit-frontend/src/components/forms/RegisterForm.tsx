"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterRequest } from "@/types";
import { registerSchema } from "@/validations/authSchemas";
import { useAuthStore } from "@/store/authStore";

import { Button } from "@/components/ui/button";

export default function RegisterForm() {
    const router = useRouter();

    const registerUser = useAuthStore((state) => state.register);

    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<RegisterRequest>({
        resolver: zodResolver(registerSchema),
    });

    async function onSubmit(data: RegisterRequest) {
        try {
            setLoading(true);
            setServerError("");

            await registerUser(data);

            alert("Registration successful! Please login.");

            reset();

            router.push("/login");

        } catch (err: any) {
            setServerError(
                err?.response?.data?.detail ??
                err?.response?.data?.message ??
                err?.response?.data?.error ??
                "Registration failed."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-lg">

            <h1 className="text-3xl font-bold">
                Create Account
            </h1>

            <p className="mt-2 mb-8 text-muted-foreground">
                Register for Uni Admit
            </p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
            >

                <div>
                    <label className="text-sm font-medium">
                        Email
                    </label>

                    <input
                        {...register("email")}
                        placeholder="Enter email"
                        className="mt-2 h-11 w-full rounded-lg border px-4"
                    />

                    <p className="mt-1 text-sm text-red-500">
                        {errors.email?.message}
                    </p>
                </div>

                <div>
                    <label className="text-sm font-medium">
                        Password
                    </label>

                    <input
                        type="password"
                        {...register("password")}
                        placeholder="Create password"
                        className="mt-2 h-11 w-full rounded-lg border px-4"
                    />

                    <p className="mt-1 text-sm text-red-500">
                        {errors.password?.message}
                    </p>
                </div>

                {serverError && (
                    <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                        {serverError}
                    </div>
                )}

                <Button
                    type="submit"
                    className="w-full h-11"
                    disabled={loading}
                >
                    {loading ? "Creating Account..." : "Register"}
                </Button>

            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                    href="/login"
                    className="font-semibold text-primary hover:underline"
                >
                    Login
                </Link>
            </div>

        </div>
    );
}