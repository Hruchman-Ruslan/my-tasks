"use server";

import { University } from "@/types/university";

export async function fetchUniversities(_prevState: any, formData: FormData) {
  const country = formData.get("country")?.toString().trim() || "";

  if (!country) {
    return { error: "Please enter a country name", universities: [] };
  }

  try {
    const response = await fetch(
      `http://universities.hipolabs.com/search?country=${encodeURIComponent(
        country,
      )}`,
    );

    if (!response.ok) {
      return { error: "Failed to fetch data", universities: [] };
    }

    const data: University[] = await response.json();

    if (!data.length) {
      return { error: "No universities found", universities: [] };
    }

    return {
      error: null,
      universities: data.map((u) => ({ ...u, saved: false })),
      country,
    };
  } catch {
    return { error: "An error occurred while searching", universities: [] };
  }
}
