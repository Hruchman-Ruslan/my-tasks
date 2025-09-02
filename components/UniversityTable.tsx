"use client";

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
    <div className="overflow-hidden rounded-lg shadow-md">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((title) => (
              <th
                key={title}
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700 bg-black">
          {universities.map((u, i) => (
            <tr key={i} className="hover:bg-amber-800">
              <td className="px-6 py-4 text-sm text-white">{i + 1}</td>
              <td className="px-6 py-4 text-sm font-medium text-white">
                {u.name}
              </td>
              <td className="px-6 py-4 text-sm text-white">{u.country}</td>
              <td className="px-6 py-4 text-sm text-white">
                {u.alpha_two_code}
              </td>
              <td className="px-6 py-4 text-sm text-white">
                {u["state-province"] || "-"}
              </td>
              <td className="px-6 py-4 text-sm text-white">
                {u.domains.join(", ")}
              </td>
              <td className="px-6 py-4 text-sm">
                {u.web_pages.map((url, j) => (
                  <a
                    key={j}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-400 hover:underline"
                  >
                    {url}
                  </a>
                ))}
              </td>
              <td className="px-6 py-4 text-sm">
                <label className="inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    checked={u.saved}
                    onChange={() => onToggleSave(i)}
                    className="peer sr-only"
                  />
                  <span className="flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white peer-checked:border-blue-600 peer-checked:bg-blue-600">
                    <svg
                      className="hidden h-3 w-3 text-white peer-checked:block"
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
