import DashboardLayout from "@/components/layout/DashboardLayout";
import EmployeeProfile from "@/components/employee/EmployeeProfile";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <DashboardLayout>
      <EmployeeProfile employeeId={id} />
    </DashboardLayout>
  );
}
