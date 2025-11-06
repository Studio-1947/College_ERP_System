import type { Config } from "tailwindcss";
import sharedConfig from "../../packages/ui/tailwind.preset";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}"
  ],
  presets: [sharedConfig]
};

export default config;
