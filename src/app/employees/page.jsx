import EmployeeTable from "@/components/EmployeeTable";
import SearchForm from "@/components/SearchForm";
import prisma from "@/lib/db";
import Pagination from "@/components/Pagination";
import { getAllData } from "@/actions/actions";

export default async function page({ searchParams }) {
  const pageNo = parseInt(searchParams.page || "1", 10);
  const maxVisible = 3;
  const [data, totalRecords] = await getAllData(maxVisible, pageNo);
  const totalPages = Math.ceil(totalRecords / maxVisible);

  return (
    <div className="p-5 flex flex-col items-center justify-center gap-4 w-full">
      <h1 className="text-3xl mb-5 tracking-wide text-slate-600">EMPLOYEES</h1>
      <SearchForm />
      <EmployeeTable employees={data} />
      <div className="mt-5 flex justify-end w-full">
        <Pagination totalPage={totalPages} maxPageView={5} />
      </div>
    </div>
  );
}
