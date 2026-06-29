import EmployeeCard from "./EmployeeCard";
import { employees } from "@/data/employees";

export default function EmployeeGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {employees.map((employee) => (

        <EmployeeCard
          key={employee.id}
          employee={employee}
        />

      ))}

    </div>
  );
}