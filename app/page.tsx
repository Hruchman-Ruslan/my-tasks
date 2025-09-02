import { cn } from "@/utils";
import Link from "next/link";

export default function Home() {
  return (
    <header>
      <nav>
        <ul className={cn("flex items-center justify-center gap-6")}>
          <li>
            <Link href={"/task-1"} className="text-3xl font-bold text-cyan-500">
              Task - 1
            </Link>
          </li>
          <li>
            <Link href={"/task-2"} className="text-3xl font-bold text-cyan-500">
              Task - 2
            </Link>
          </li>
          <li>
            <Link href={"/task-3"} className="text-3xl font-bold text-cyan-500">
              Task - 3
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
