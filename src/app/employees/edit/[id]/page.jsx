"use client";
import { useEffect, useState } from "react";
import { DatePicker } from "@nextui-org/date-picker";
import { parseDate, parseAbsoluteToLocal } from "@internationalized/date";
import { editEmployeeData, getEmployeeData } from "@/actions/actions";
import { useParams } from "next/navigation";

export default function page() {
  const [employeeData, setEmployeeData] = useState({
    firstname: "",
    lastname: "",
    // imagePath: "",
    email: "",
    mobile: "",
    dateOfBirth: new Date("2023-04-04").toISOString(),
  });
  const [value, setValue] = useState(parseDate("2024-04-04"));

  const { id } = useParams();

  useEffect(() => {
    const getData = async function () {
      const data = await getEmployeeData(id); // Fetch data

      setEmployeeData({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        mobile: data.mobile,
        dateOfBirth: data.dateOfBirth,
      });

      // setValue(parseAbsoluteToLocal(employeeData.dateOfBirth)); // Set date of birth
      console.log(data);
    };

    getData();
  }, [id]);

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
    <div className="p-5 flex flex-col items-center justify-center gap-4 w-full">
      <h1 className="text-3xl mb-5 tracking-wide text-slate-600">
        EDIT EMPLOYEE DATA
      </h1>
      <form
        action={() => editEmployeeData(employeeData, id)}
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
          granularity="day"
          showMonthAndYearPickers
          radius="none"
          className="border-slate-700"
          value={value}
          onChange={handleDateChange}
          isRequired
        />

        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white">
          Update
        </button>
      </form>
    </div>
  );
}
