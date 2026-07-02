import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <h1 className="text-center text-3xl font-bold text-violet-700">
          Divine HRMS
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Sign in to continue
        </p>

        <LoginForm />

      </div>

    </div>
  );
}