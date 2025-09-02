import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/task-1"} className="text-cyan-500">
        Task - 1
      </Link>
      <Link href={"/task-2"} className="text-cyan-500">
        Task - 2
      </Link>
    </div>
  );
}
