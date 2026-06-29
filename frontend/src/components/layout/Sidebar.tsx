"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Users,
  Clock3,
  CalendarDays,
  CreditCard,
  Building2,
  FileBarChart2,
  Settings,
} from "lucide-react";

const menus = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Employees",
    href: "/employees",
    icon: Users,
  },
  {
    name: "Attendance",
    href: "/attendance",
    icon: Clock3,
  },
  {
    name: "Leave",
    href: "/leave",
    icon: CalendarDays,
  },
  {
    name: "Payroll",
    href: "/payroll",
    icon: CreditCard,
  },
  {
    name: "Departments",
    href: "/departments",
    icon: Building2,
  },
  {
    name: "Reports",
    href: "/reports",
    icon: FileBarChart2,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-h-screen bg-white border-r border-gray-200 shadow-sm flex flex-col">

      {/* Logo */}
      <div className="h-20 flex items-center px-8 border-b">

        <div>
          <h1 className="text-3xl font-bold text-violet-700">
            Divine
          </h1>

          <p className="text-sm text-gray-500">
            Corporation HRMS
          </p>
        </div>

      </div>

      {/* Menu */}
      <nav className="flex-1 p-5">

        {menus.map((menu) => {

          const Icon = menu.icon;

          const active = pathname === menu.href;

          return (
            <Link
              key={menu.name}
              href={menu.href}
              className={`mb-2 flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-300
                ${
                  active
                    ? "bg-violet-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-violet-50 hover:text-violet-700"
                }`}
            >
              <Icon size={22} />

              <span className="font-medium">
                {menu.name}
              </span>
            </Link>
          );
        })}

      </nav>

      {/* Footer */}
      <div className="border-t p-5">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-600 text-lg font-bold text-white">
            A
          </div>

          <div>

            <h3 className="font-semibold">
              Admin
            </h3>

            <p className="text-xs text-gray-500">
              admin@divine.com
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}