"use client";

import clsx from "clsx";
import { useMemo, useState } from "react";

interface ThemePreset {
  name: string;
  primary: string;
  accent: string;
}

interface ThemePreviewProps {
  presets: ThemePreset[];
}

export function ThemePreview({ presets }: ThemePreviewProps) {
  const [activePreset, setActivePreset] = useState(presets[0]);

  const gradient = useMemo(() => {
    return `linear-gradient(135deg, ${activePreset.primary}, ${activePreset.accent})`;
  }, [activePreset]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {presets.map((preset) => (
          <button
            key={preset.name}
            type="button"
            onClick={() => setActivePreset(preset)}
            className={clsx(
              "flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold transition",
              activePreset.name === preset.name
                ? "border-primary-500 bg-primary-50 text-primary-700"
                : "border-surface-200 bg-white text-surface-600 hover:border-primary-200"
            )}
          >
            <span
              className="h-4 w-4 rounded-full"
              style={{ background: preset.primary }}
              aria-hidden="true"
            />
            {preset.name}
          </button>
        ))}
      </div>
      <div
        className="rounded-2xl border border-surface-200 p-6 text-white shadow-md transition"
        style={{ backgroundImage: gradient }}
      >
        <p className="text-xs uppercase tracking-wide text-white/70">Live preview</p>
        <p className="mt-3 text-xl font-semibold">{activePreset.name}</p>
        <p className="mt-2 text-sm text-white/80">
          The same UI components adopt each preset instantly thanks to shared design tokens and runtime branding.
        </p>
        <div className="mt-5 flex gap-3">
          <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-surface-900">
            Primary
          </span>
          <span className="rounded-full border border-white/60 px-4 py-2 text-xs font-semibold text-white">
            Accent
          </span>
        </div>
      </div>
    </div>
  );
}
