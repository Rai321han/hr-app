import Link from "next/link";
import { LiaEdit } from "react-icons/lia";

export default function EditButton({ id }) {
  return (
    <Link className="bg-green-400 p-2" href={`/employees/edit/${id}`}>
      <LiaEdit />
    </Link>
  );
}
