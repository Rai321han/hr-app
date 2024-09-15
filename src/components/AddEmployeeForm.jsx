"use client";
import { useState } from "react";
import { DatePicker } from "@nextui-org/date-picker";
import { parseDate } from "@internationalized/date";
import { addNewEmployee } from "@/actions/actions";

export default function AddEmployeeForm() {
  const [employeeData, setEmployeeData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    dateOfBirth: new Date().toISOString(),
  });
  const [value, setValue] = useState(parseDate("2024-04-04"));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (newValue) => {
    if (newValue) {
      setValue(newValue);
      // Create a Date object from the selected date
      const selectedDate = new Date(newValue);
      // Convert the Date object to ISO format
      const isoDate = selectedDate.toISOString(); // This gives "yyyy-mm-ddT00:00:00.000Z"
      setEmployeeData((prevData) => ({
        ...prevData,
        dateOfBirth: isoDate,
      }));
    }
  };

  return (
    <>
      {" "}
      <form
        action={() => addNewEmployee(employeeData)}
        className="flex flex-col gap-2"
      >
        <input
          className="border border-slate-700 px-4 py-2"
          type="text"
          name="firstname"
          placeholder="First Name"
          value={employeeData.firstname}
          onChange={handleInputChange}
          required
        />
        <input
          className="border border-slate-700 px-4 py-2"
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={employeeData.lastname}
          onChange={handleInputChange}
          required
        />

        <input
          className="border border-slate-700 px-4 py-2"
          type="text"
          name="email"
          placeholder="Email"
          value={employeeData.email}
          onChange={handleInputChange}
          required
        />
        <input
          className="border border-slate-700 px-4 py-2"
          type="text"
          name="mobile"
          placeholder="Mobile No"
          value={employeeData.mobile}
          onChange={handleInputChange}
          required
        />

        <DatePicker
          label="Date of birth"
          variant="bordered"
          showMonthAndYearPickers
          radius="none"
          className="border-slate-700"
          value={value}
          onChange={handleDateChange}
          isRequired
        />

        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white">
          ADD
        </button>
      </form>
    </>
  );
}
