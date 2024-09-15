"use client";
import { DatePicker } from "@nextui-org/date-picker";
import { GoSearch } from "react-icons/go";
export default function SearchForm() {
  return (
    <div className="flex flex-row gap-2  justify-between w-full">
      <input
        className="border border-slate-700 px-4 py-2"
        type="text"
        name="name"
        placeholder="Name"
      />
      <DatePicker
        label="Date of birth"
        variant="bordered"
        showMonthAndYearPickers
        radius="none"
        className="border-slate-700"
      />
      <input
        className="border border-slate-700 px-4 py-2"
        type="text"
        name="email"
        placeholder="Email"
      />
      <input
        className="border border-slate-700 px-4 py-2"
        type="text"
        name="text"
        placeholder="Mobile"
      />
      <div className="flex items-center justify-center py-2 px-4 border border-slate-700 cursor-pointer bg-slate-300">
        <GoSearch />
      </div>
    </div>
  );
}
