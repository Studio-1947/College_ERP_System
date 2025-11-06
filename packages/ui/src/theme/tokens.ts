export const tokens = {
  colors: {
    transparent: "transparent",
    white: "#ffffff",
    black: "#0f172a",
    primary: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81"
    },
    secondary: {
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63"
    },
    surface: {
      25: "#f8fafc",
      50: "#f1f5f9",
      100: "#e2e8f0",
      200: "#cbd5f5",
      300: "#cbd5f5",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a"
    },
    success: {
      100: "#dcfce7",
      500: "#22c55e",
      700: "#15803d"
    },
    warning: {
      100: "#fef3c7",
      500: "#f59e0b",
      700: "#b45309"
    },
    danger: {
      100: "#fee2e2",
      500: "#ef4444",
      700: "#b91c1c"
    }
  },
  spacing: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem"
  },
  radii: {
    none: "0",
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px"
  },
  fontFamily: {
    sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(15, 23, 42, 0.08)",
    md: "0 8px 16px -4px rgba(15, 23, 42, 0.12)",
    lg: "0 20px 40px -15px rgba(15, 23, 42, 0.18)"
  }
} as const;
