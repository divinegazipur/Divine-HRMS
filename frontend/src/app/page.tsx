import DashboardLayout from "@/components/layout/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>

      <h1 className="text-5xl font-bold">
        Dashboard
      </h1>

      <p className="text-gray-500 mt-2">
        Welcome to Divine Corporation HRMS
      </p>

    </DashboardLayout>
  );
}