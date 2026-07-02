import Link from "next/link";

export default function EmployeeHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          Employees
        </h1>

        <p className="text-gray-500 mt-2">
          Manage all employees of Divine Corporation
        </p>
      </div>

      <Link href="/employees/add">
        <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl font-medium transition">
          + Add Employee
        </button>
      </Link>
    </div>
  );
}