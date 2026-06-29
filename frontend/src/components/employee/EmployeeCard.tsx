import { Employee } from "@/types/employee";
import {
  Phone,
  Mail,
  MoreVertical,
} from "lucide-react";

interface Props {
  employee: Employee;
}

export default function EmployeeCard({ employee }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-lg transition">

      <div className="flex justify-between">

        <span
          className={`text-xs px-3 py-1 rounded-full font-medium
          ${
            employee.status === "Active"
              ? "bg-green-100 text-green-700"
              : employee.status === "Inactive"
              ? "bg-red-100 text-red-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {employee.status}
        </span>

        <MoreVertical
          className="text-gray-400 cursor-pointer"
          size={20}
        />

      </div>

      <div className="flex flex-col items-center mt-5">

        <div className="h-24 w-24 rounded-full bg-violet-100 flex items-center justify-center text-2xl font-bold text-violet-700">
          {employee.avatar}
        </div>

        <h2 className="mt-5 text-xl font-semibold">
          {employee.fullName}
        </h2>

        <p className="text-gray-500">
          {employee.designation}
        </p>

        <p className="text-violet-600 text-sm">
          {employee.department}
        </p>

      </div>

      <div className="mt-6 space-y-3">

        <div className="flex items-center gap-3">

          <Phone size={18} />

          <span>{employee.phone}</span>

        </div>

        <div className="flex items-center gap-3">

          <Mail size={18} />

          <span>{employee.email}</span>

        </div>

      </div>

    </div>
  );
}