import DashboardLayout from "@/components/layout/DashboardLayout";
import EmployeeHeader from "@/components/employee/EmployeeHeader";
import EmployeeGrid from "@/components/employee/EmployeeGrid";

export default function EmployeesPage() {
  return (
    <DashboardLayout>

      <div className="space-y-6">

        <EmployeeHeader />

        <EmployeeGrid />

      </div>

    </DashboardLayout>
  );
}