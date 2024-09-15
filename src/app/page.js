import { getNumberOfData } from "@/actions/actions";

export default function Home() {
  const numberOfEmployee = getNumberOfData();
  return (
    <div className="p-10 bg-slate-800 text-white flex flex-col items-center justify-center gap-4">
      <h1>Total Employees</h1>
      <div>{numberOfEmployee}</div>
    </div>
  );
}
