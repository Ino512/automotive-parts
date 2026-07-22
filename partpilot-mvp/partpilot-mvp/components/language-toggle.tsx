"use client";

import type { Language } from "@/lib/types";

type Props = {
  language: Language;
  onChange: (language: Language) => void;
};

export function LanguageToggle({ language, onChange }: Props) {
  return (
    <div className="languageToggle" aria-label="Language selector">
      <button className={language === "en" ? "active" : ""} onClick={() => onChange("en")} type="button">EN</button>
      <button className={language === "fr" ? "active" : ""} onClick={() => onChange("fr")} type="button">FR</button>
    </div>
  );
}
