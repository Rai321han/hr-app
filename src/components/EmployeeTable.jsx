"use client";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { RiExpandUpDownLine } from "react-icons/ri";
export default function EmployeeTable({ employees }) {
  return (
    <>
      <table className="w-full">
        <thead>
          <tr>
            <th className="bg-slate-700 text-white px-4 py-3 cursor-pointer hover:bg-slate-600">
              <div className="flex flex-row gap-3 items-center justify-center">
                <RiExpandUpDownLine />
                <span className="text-center">Full Name</span>
              </div>
            </th>
            <th className="bg-slate-700 text-white px-4 py-3 cursor-pointer hover:bg-slate-600">
              <div className="flex flex-row gap-3 items-center justify-center">
                <RiExpandUpDownLine />
                <span>Email</span>
              </div>
            </th>
            <th className="bg-slate-700 text-white px-4 py-3 cursor-pointer hover:bg-slate-600">
              <div className="flex flex-row gap-3 items-center justify-center">
                <RiExpandUpDownLine />
                <span>Mobile</span>
              </div>
            </th>
            <th className="bg-slate-700 text-white px-4 py-3 cursor-pointer hover:bg-slate-600">
              <div className="flex flex-row gap-3 items-center justify-center">
                <RiExpandUpDownLine />
                <span>Date of birth</span>
              </div>
            </th>
            <th className="bg-slate-700 text-white px-4 py-3 ">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => {
            return (
              <tr className="text-center" key={index}>
                <td>
                  {employee.firstname} {employee.lastname}
                </td>
                <td>{employee.email}</td>
                <td>{employee.mobile}</td>
                <td>{employee.dateOfBirth.toLocaleDateString("en-GB")}</td>
                <td className="items-center justify-center flex flex-row gap-3">
                  <EditButton id={employee.id} />
                  <DeleteButton id={employee.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
