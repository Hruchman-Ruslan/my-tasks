"use client";

import { cn } from "@/utils";
import { SavedUniversity } from "@/types/university";

interface Props {
  universities: SavedUniversity[];
  onToggleSave: (index: number) => void;
}

export default function UniversitiesTable({
  universities,
  onToggleSave,
}: Props) {
  const headers = [
    "№",
    "Name",
    "Country",
    "Code",
    "State/Province",
    "Domains",
    "Website",
    "Save",
  ];

  return (
    <div className={cn("overflow-hidden rounded-lg shadow-md")}>
      <table className={cn("min-w-full divide-y divide-gray-200")}>
        <thead className={cn("bg-gray-50")}>
          <tr>
            {headers.map((title) => (
              <th
                key={title}
                className={cn(
                  "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase",
                )}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={cn("divide-y divide-gray-700 bg-black")}>
          {universities.map((u, i) => (
            <tr key={i} className={cn("hover:bg-amber-800")}>
              <td className={cn("px-6 py-4 text-sm text-white")}>{i + 1}</td>
              <td className={cn("px-6 py-4 text-sm font-medium text-white")}>
                {u.name}
              </td>
              <td className={cn("px-6 py-4 text-sm text-white")}>
                {u.country}
              </td>
              <td className={cn("px-6 py-4 text-sm text-white")}>
                {u.alpha_two_code}
              </td>
              <td className={cn("px-6 py-4 text-sm text-white")}>
                {u["state-province"] || "-"}
              </td>
              <td className={cn("px-6 py-4 text-sm text-white")}>
                {u.domains.join(", ")}
              </td>
              <td className={cn("px-6 py-4 text-sm")}>
                {u.web_pages.map((url, j) => (
                  <a
                    key={j}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn("block text-blue-400 hover:underline")}
                  >
                    {url}
                  </a>
                ))}
              </td>
              <td className={cn("px-6 py-4 text-sm")}>
                <label
                  className={cn("inline-flex cursor-pointer items-center")}
                >
                  <input
                    type="checkbox"
                    checked={u.saved}
                    onChange={() => onToggleSave(i)}
                    className={cn("peer sr-only")}
                  />
                  <span
                    className={cn(
                      "flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white peer-checked:border-blue-600 peer-checked:bg-blue-600",
                    )}
                  >
                    <svg
                      className={cn(
                        "hidden h-3 w-3 text-white peer-checked:block",
                      )}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
