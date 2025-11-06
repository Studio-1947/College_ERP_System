import type { Config } from "tailwindcss";
import { tokens } from "./src/theme/tokens";

const preset: Partial<Config> = {
  darkMode: ["class"],
  theme: {
    extend: {
      colors: tokens.colors,
      spacing: tokens.spacing,
      borderRadius: tokens.radii,
      fontFamily: tokens.fontFamily,
      boxShadow: tokens.shadows
    }
  },
  plugins: []
};

export default preset;
