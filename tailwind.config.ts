import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5D5DFF",
        dark: "#1E1E2F",
        'light-bg': "#F9F9FF",
        accent: "#E91E63",
        navy: "#1A2238",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
