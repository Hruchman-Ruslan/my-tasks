import { cn } from "@/utils";

import Link from "next/link";

export default function Home() {
  return (
    <header className={cn("w-full bg-gray-900 shadow-md")}>
      <nav className={cn("mx-auto max-w-6xl px-6 py-4")}>
        <ul className={cn("flex items-center justify-center gap-8")}>
          <li>
            <Link
              href={"/task-1"}
              className={cn(
                "rounded-lg px-4 py-2 text-2xl font-semibold text-cyan-400 transition-colors duration-200 hover:bg-cyan-500/10 hover:text-cyan-300",
              )}
            >
              Task - 1
            </Link>
          </li>
          <li>
            <Link
              href={"/task-2"}
              className={cn(
                "rounded-lg px-4 py-2 text-2xl font-semibold text-cyan-400 transition-colors duration-200 hover:bg-cyan-500/10 hover:text-cyan-300",
              )}
            >
              Task - 2
            </Link>
          </li>
          <li>
            <Link
              href={"/task-3"}
              className={cn(
                "rounded-lg px-4 py-2 text-2xl font-semibold text-cyan-400 transition-colors duration-200 hover:bg-cyan-500/10 hover:text-cyan-300",
              )}
            >
              Task - 3
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
