"use client";

import clsx from "clsx";
import { useState } from "react";

interface Persona {
  id: string;
  label: string;
  summary: string;
  bullets: string[];
}

interface PersonaTabsProps {
  personas: Persona[];
}

export function PersonaTabs({ personas }: PersonaTabsProps) {
  const [active, setActive] = useState(personas[0]);

  return (
    <div className="rounded-3xl border border-surface-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap gap-2">
        {personas.map((persona) => (
          <button
            key={persona.id}
            type="button"
            onClick={() => setActive(persona)}
            className={clsx(
              "rounded-full px-4 py-2 text-sm font-semibold transition",
              active.id === persona.id
                ? "bg-primary-600 text-white shadow"
                : "bg-surface-100 text-surface-600 hover:bg-surface-200"
            )}
          >
            {persona.label}
          </button>
        ))}
      </div>
      <div className="mt-6 space-y-3">
        <p className="text-lg font-semibold text-surface-900">{active.label}</p>
        <p className="text-sm text-surface-600">{active.summary}</p>
        <ul className="space-y-2 text-sm text-surface-700">
          {active.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" aria-hidden="true" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
