"use server";

import prisma from "@/lib/db";
import { redirect } from "next/navigation";

const addNewEmployee = async function (employeeData) {
  await prisma.employee.create({
    data: {
      firstname: employeeData.firstname,
      lastname: employeeData.lastname,
      email: employeeData.email,
      mobile: employeeData.mobile,
      dateOfBirth: employeeData.dateOfBirth,
    },
  });
  redirect("/employees");
};

const editEmployeeData = async function (employeeData, id) {
  await prisma.employee.update({
    where: { id },
    data: {
      firstname: employeeData.firstname,
      lastname: employeeData.lastname,
      email: employeeData.email,
      mobile: employeeData.mobile,
      dateOfBirth: employeeData.dateOfBirth,
    },
  });
  redirect("/employees");
};

const getEmployeeData = async function (id) {
  const data = await prisma.employee.findUnique({
    where: { id },
  });
  return data;
};

const deleteEmployee = async function (id) {
  const user = await prisma.employee.delete({
    where: { id },
  });
};

const getAllData = async function (maxVisible, pageNo) {
  const data = await prisma.employee.findMany({
    take: maxVisible,
    skip: maxVisible * (pageNo - 1),
  });

  const totalRecords = await prisma.employee.count();

  return [data, totalRecords];
};

const getNumberOfData = async function () {
  return await prisma.employee.count();
};

export {
  addNewEmployee,
  editEmployeeData,
  getEmployeeData,
  deleteEmployee,
  getAllData,
  getNumberOfData,
};
