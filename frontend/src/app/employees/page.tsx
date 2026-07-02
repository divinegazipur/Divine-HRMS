import DashboardLayout from "@/components/layout/DashboardLayout";
import EmployeeHeader from "@/components/employee/EmployeeHeader";
import EmployeeGrid from "@/components/employee/EmployeeGrid";

export default function Page() {
  return (
    <DashboardLayout>
      <EmployeeHeader />
      <div className="mt-8">
        <EmployeeGrid />
      </div>
    </DashboardLayout>
  );
}
