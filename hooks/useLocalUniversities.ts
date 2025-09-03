import { useEffect, useState } from "react";

import { SavedUniversity } from "@/types/university";

interface LocalState {
  country: string;
  universities: SavedUniversity[];
}

export function useLocalUniversities(initialCountry = "") {
  const [country, setCountry] = useState(initialCountry);
  const [universities, setUniversities] = useState<SavedUniversity[]>([]);
  const [skipSave, setSkipSave] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("universitiesAppState");
    if (savedData) {
      try {
        const parsed: LocalState = JSON.parse(savedData);
        setCountry(parsed.country || "");
        setUniversities(parsed.universities || []);
      } catch (e) {
        console.error("Failed to parse localStorage data:", e);
      }
    }
  }, []);

  useEffect(() => {
    if (skipSave) {
      setSkipSave(false);
      return;
    }
    const data: LocalState = { country, universities };
    localStorage.setItem("universitiesAppState", JSON.stringify(data));
  }, [country, universities, skipSave]);

  const toggleSave = (index: number) => {
    const updated = universities.map((u, i) =>
      i === index ? { ...u, saved: !u.saved } : u,
    );
    setUniversities(updated);
  };

  const reset = () => {
    setSkipSave(true);
    setCountry("");
    setUniversities([]);
    localStorage.removeItem("universitiesAppState");
  };

  const savedCount = universities.filter((u) => u.saved).length;

  return {
    country,
    setCountry,
    universities,
    setUniversities,
    toggleSave,
    savedCount,
    reset,
  };
}
