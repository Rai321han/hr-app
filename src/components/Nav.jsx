"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHome, GoPeople, GoPersonAdd } from "react-icons/go";
export default function Nav() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col h-full bg-slate-300 min-w-fit">
      <Link
        className={` ${
          pathname === "/" ? "bg-slate-600" : "bg-slate-900"
        } text-white hover:bg-slate-600 px-4 py-4 text-left flex flex-row gap-4 items-center`}
        href="/"
      >
        <GoHome />
        <span>Home</span>
      </Link>
      <Link
        className={` ${
          pathname === "/employees" ? "bg-slate-600" : "bg-slate-900"
        } text-white hover:bg-slate-600 px-4 py-4 text-left flex flex-row gap-4 items-center`}
        href="/employees"
      >
        <GoPeople />
        <span>Employees</span>
      </Link>
      <Link
        className={` ${
          pathname === "/add-employee" ? "bg-slate-600" : "bg-slate-900"
        } text-white hover:bg-slate-600 px-4 py-4 text-left flex flex-row gap-4 items-center`}
        href="/add-employee"
      >
        <GoPersonAdd />
        <span>Add Employee</span>
      </Link>
    </div>
  );
}
