import { Phone, BadgeInfo, MoreVertical } from "lucide-react";
import { Employee } from "@/types/employee";

interface Props {
  employee: Employee;
}

export default function EmployeeCard({ employee }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-lg transition">
      <div className="flex justify-between">

        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${
            employee.service_status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {employee.service_status}
        </span>

        <MoreVertical className="text-gray-400" size={20} />
      </div>

      <div className="flex flex-col items-center mt-5">

        <div className="h-24 w-24 rounded-full bg-violet-100 flex items-center justify-center text-2xl font-bold text-violet-700">
          {employee.full_name
            ?.split(" ")
            .map((n: string) => n[0])
            .slice(0, 2)
            .join("")}
        </div>

        <h2 className="mt-5 text-xl font-semibold text-center">
          {employee.full_name}
        </h2>

        <p className="text-gray-500">
          {employee.department_designation}
        </p>

        <p className="text-violet-600 text-sm">
          Employee ID : {employee.employee_id}
        </p>

      </div>

      <div className="mt-6 space-y-3">

        <div className="flex items-center gap-3">
          <Phone size={18} />
          <span>{employee.nagad_number}</span>
        </div>

        <div className="flex items-center gap-3">
          <BadgeInfo size={18} />
          <span>{employee.blood_group}</span>
        </div>

      </div>
    </div>
  );
}
