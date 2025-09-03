"use client";

import { cn } from "@/utils";

interface Props {
  formAction: (formData: FormData) => void;
  isPending: boolean;
  defaultCountry: string;
  onReset: () => void;
}

export default function UniversitySearchForm({
  formAction,
  isPending,
  defaultCountry,
  onReset,
}: Props) {
  return (
    <form
      action={formAction}
      className={cn(
        "mb-8 flex items-end gap-4 rounded-lg bg-white p-6 shadow-md",
      )}
    >
      <div className={cn("flex-1")}>
        <label
          htmlFor="country"
          className={cn("mb-2 block text-sm font-medium text-gray-700")}
        >
          Country name (Latin letters)
        </label>
        <input
          id="country"
          name="country"
          type="text"
          defaultValue={defaultCountry}
          placeholder="Example: ukraine"
          disabled={isPending}
          className={cn(
            "w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:ring-2 focus:ring-blue-500 focus:outline-none",
          )}
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className={cn(
          "rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 disabled:opacity-50",
        )}
      >
        {isPending ? "Searching..." : "Submit"}
      </button>

      <button
        type="button"
        onClick={onReset}
        disabled={isPending}
        className={cn(
          "rounded-md bg-gray-400 px-6 py-2 text-white hover:bg-gray-500 disabled:opacity-50",
        )}
      >
        Reset
      </button>
    </form>
  );
}
