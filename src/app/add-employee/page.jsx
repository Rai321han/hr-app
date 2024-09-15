import AddEmployeeForm from "@/components/AddEmployeeForm";

export default function AddEmployee() {
  return (
    <div className="p-5 flex flex-col items-center justify-center gap-4 w-full">
      <h1 className="text-3xl mb-5 tracking-wide text-slate-600">
        ADD EMPLOYEE
      </h1>

      <AddEmployeeForm />
    </div>
  );
}
