"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Employee } from "@/types/employee";

interface Props {
  employeeId: string;
}

const FIELD_LABELS: { key: keyof Employee; label: string }[] = [
  { key: "employee_id", label: "Employee ID" },
  { key: "department_designation", label: "Department / Designation" },
  { key: "date_of_birth", label: "Date of birth" },
  { key: "blood_group", label: "Blood group" },
  { key: "employee_id_type", label: "ID type" },
  { key: "employee_id_number", label: "ID number" },
  { key: "nagad_number", label: "Nagad number" },
  { key: "joining_date", label: "Joining date" },
  { key: "bank_account_name", label: "Bank account name" },
  { key: "bank_account_number", label: "Bank account number" },
  { key: "bank_name", label: "Bank name" },
  { key: "branch_name", label: "Branch name" },
  { key: "routing_number", label: "Routing number" },
  { key: "nominee_name", label: "Nominee name" },
  { key: "nominee_date_of_birth", label: "Nominee date of birth" },
  { key: "nominee_id_type", label: "Nominee ID type" },
  { key: "nominee_id_number", label: "Nominee ID number" },
  { key: "nominee_contact_number", label: "Nominee contact" },
  { key: "relationship_type", label: "Relationship" },
  { key: "service_status", label: "Status" },
];

export default function EmployeeProfile({ employeeId }: Props) {
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEmployee() {
      const { data, error } = await supabase
        .from("employees")
        .select("*")
        .eq("employee_id", employeeId)
        .single();

      if (error) {
        setError(error.message);
      } else {
        setEmployee(data);
      }

      setLoading(false);
    }

    fetchEmployee();
  }, [employeeId]);

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">লোড হচ্ছে...</div>
    );
  }

  if (error || !employee) {
    return (
      <div className="text-center py-20 text-red-600">
        এমপ্লয়ি পাওয়া যায়নি
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-8 max-w-3xl mx-auto">
      <div className="flex flex-col items-center border-b pb-6 mb-6">
        <div className="h-24 w-24 rounded-full bg-violet-100 flex items-center justify-center text-2xl font-bold text-violet-700">
          {employee.full_name
            ?.split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </div>
        <h2 className="mt-4 text-2xl font-bold">{employee.full_name}</h2>
        <p className="text-gray-500">{employee.department_designation}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {FIELD_LABELS.map((f) => (
          <div key={f.key}>
            <p className="text-xs text-gray-400 uppercase tracking-wide">
              {f.label}
            </p>
            <p className="text-gray-800 font-medium">
              {employee[f.key] || "—"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
