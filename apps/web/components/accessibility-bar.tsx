"use client";

import { useEffect, useState } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi" },
  { code: "bn", label: "Bengali" }
] as const;

export function AccessibilityBar() {
  const [textScale, setTextScale] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const [language, setLanguage] = useState<(typeof languages)[number]["code"]>("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const storedScale = window.localStorage.getItem("college-erp-text-scale");
    const storedContrast = window.localStorage.getItem("college-erp-contrast");
    const storedLang = window.localStorage.getItem("college-erp-lang");
    if (storedScale) {
      setTextScale(Number(storedScale));
    }
    if (storedContrast) {
      setHighContrast(storedContrast === "high");
    }
    if (storedLang && languages.some((lang) => lang.code === storedLang)) {
      setLanguage(storedLang as (typeof languages)[number]["code"]);
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--text-scale", textScale.toString());
    window.localStorage.setItem("college-erp-text-scale", String(textScale));
  }, [textScale]);

  useEffect(() => {
    document.documentElement.dataset.contrast = highContrast ? "high" : "normal";
    window.localStorage.setItem("college-erp-contrast", highContrast ? "high" : "normal");
  }, [highContrast]);

  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
    window.localStorage.setItem("college-erp-lang", language);
  }, [language]);

  useEffect(() => {
    if (!isMenuOpen) {
      document.documentElement.classList.remove("accessibility-menu-open");
      return;
    }
    document.documentElement.classList.add("accessibility-menu-open");
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isMenuOpen]);

  return (
    <div className="accessibility-bar bg-surface-900 text-white">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-2 text-xs sm:text-sm">
        <p className="font-semibold uppercase tracking-wide text-primary-200">
          Accessibility & Language Controls
        </p>
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-300 sm:hidden"
        >
          Menu
          <svg viewBox="0 0 16 16" className={`h-3 w-3 transition ${isMenuOpen ? "rotate-180" : ""}`} aria-hidden="true">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="hidden flex-wrap items-center gap-4 sm:flex">
          <div className="flex items-center gap-2">
            <span className="text-surface-200">Text size</span>
            {[1, 1.1, 1.2].map((scale) => (
              <button
                key={scale}
                type="button"
                onClick={() => setTextScale(scale)}
                className={`rounded-md px-2 py-1 font-semibold ${
                  textScale === scale ? "bg-primary-500 text-white" : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                A{scale > 1 ? "+" : ""}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-surface-200">Contrast</span>
            <button
              type="button"
              onClick={() => setHighContrast((prev) => !prev)}
              className={`rounded-md px-3 py-1 font-semibold ${
                highContrast ? "bg-primary-500 text-white" : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {highContrast ? "High" : "Default"}
            </button>
          </div>
          <label className="flex items-center gap-2 text-surface-200">
            Language
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value as (typeof languages)[number]["code"])}
              className="rounded-md border border-white/20 bg-transparent px-2 py-1 text-white focus:outline-none"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code} className="text-surface-900">
                  {lang.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      {isMenuOpen ? (
        <div className="sm:hidden">
          <div className="flex flex-col gap-4 border-t border-white/10 px-4 py-4 text-xs">
            <div>
              <p className="text-surface-200">Text size</p>
              <div className="mt-2 flex gap-2">
                {[1, 1.1, 1.2].map((scale) => (
                  <button
                    key={scale}
                    type="button"
                    onClick={() => setTextScale(scale)}
                    className={`w-full rounded-md px-2 py-2 font-semibold ${
                      textScale === scale ? "bg-primary-500 text-white" : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    A{scale > 1 ? "+" : ""}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-surface-200">Contrast</p>
              <button
                type="button"
                onClick={() => setHighContrast((prev) => !prev)}
                className="mt-2 w-full rounded-md px-3 py-2 font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-300"
              >
                {highContrast ? "High contrast" : "Default contrast"}
              </button>
            </div>
            <div>
              <label className="text-surface-200">Language</label>
              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value as (typeof languages)[number]["code"])}
                className="mt-2 w-full rounded-md border border-white/20 bg-transparent px-2 py-2 text-white focus:outline-none"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="text-surface-900">
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
