"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Employee } from "@/types/employee";
import EmployeeCard from "./EmployeeCard";

export default function EmployeeGrid() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchEmployees() {
      const { data, error } = await supabase
        .from("employees")
        .select("*")
        .order("full_name", { ascending: true });

      if (error) {
        setError(error.message);
      } else {
        setEmployees(data ?? []);
      }

      setLoading(false);
    }

    fetchEmployees();
  }, []);

  const filtered = employees.filter((emp) => {
    const q = search.toLowerCase();

    return (
      emp.full_name?.toLowerCase().includes(q) ||
      emp.employee_id?.toLowerCase().includes(q) ||
      emp.department_designation?.toLowerCase().includes(q)
    );
  });

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">লোড হচ্ছে...</div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-600">
        ডেটা লোড করতে সমস্যা হয়েছে: {error}
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="নাম, আইডি বা ডিপার্টমেন্ট দিয়ে খুঁজুন..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
      </div>

      <p className="text-sm text-gray-500 mb-4">
        মোট {filtered.length} জন এমপ্লয়ি
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          কোনো এমপ্লয়ি পাওয়া যায়নি
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((emp) => (
            <Link key={emp.id} href={`/employees/${emp.employee_id}`}>
              <EmployeeCard employee={emp} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
