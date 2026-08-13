import LoginForm from "@/components/forms/LoginForm";

export default function LoginPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-slate-50 p-6 selection:bg-slate-900 selection:text-white">
            <div className="w-full max-w-md space-y-6">
                <LoginForm />
            </div>
        </main>
    );
}