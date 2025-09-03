"use client";

import { useActionState, useEffect } from "react";

import { cn } from "@/utils";

import { fetchUniversities } from "@/actions/universities";
import { useLocalUniversities } from "@/hooks/useLocalUniversities";

import UniversitiesTable from "@/components/UniversityTable";
import UniversitySearchForm from "@/components/UniversitySearchForm";

export default function ThirdTask() {
  const {
    country,
    setCountry,
    universities,
    setUniversities,
    toggleSave,
    savedCount,
    reset,
  } = useLocalUniversities();

  const [state, formAction, isPending] = useActionState(fetchUniversities, {
    error: null,
    universities,
    country,
  });

  useEffect(() => {
    if (state.universities.length && state.country !== country) {
      setCountry(state.country ?? "");
      setUniversities(state.universities);
    }
  }, [state, country, setCountry, setUniversities]);

  return (
    <section className={cn("min-h-screen bg-gray-50 px-4 py-8")}>
      <div className={cn("mx-auto max-w-6xl")}>
        <h1 className={cn("mb-8 text-center text-3xl font-bold text-gray-800")}>
          Search Universities by Country
        </h1>

        {universities.length > 0 && (
          <div
            className={cn(
              "mb-6 rounded-lg bg-blue-100 p-4 text-center text-lg font-semibold text-blue-800",
            )}
          >
            Saved: {savedCount}
          </div>
        )}

        <div className={cn("mx-auto mb-6 max-w-md")}>
          <UniversitySearchForm
            formAction={formAction}
            isPending={isPending}
            defaultCountry={country}
            onReset={reset}
          />
        </div>

        {state.error && (
          <div
            className={cn(
              "mb-6 rounded-lg border border-red-400 bg-red-100 p-4 text-red-700",
            )}
          >
            {state.error}
          </div>
        )}

        {universities.length > 0 && (
          <UniversitiesTable
            universities={universities}
            onToggleSave={toggleSave}
          />
        )}
      </div>
    </section>
  );
}
