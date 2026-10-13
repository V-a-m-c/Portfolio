/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f6f5f1",
        surface: "#ffffff",
        line: "#e2e0d8",
        ink: {
          DEFAULT: "#15171a",
          soft: "#454a52",
          mute: "#646973",
        },
        accent: {
          DEFAULT: "#0a6650",
          deep: "#074c3c",
          soft: "#e2f0ea",
          bright: "#6fe0bd",
        },
        night: {
          DEFAULT: "#111413",
          raised: "#191d1b",
          line: "#2b312e",
          text: "#e8ebe8",
          mute: "#a2aaa5",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "ui-sans-serif", "system-ui", '"Segoe UI"', "Roboto", "Arial", "sans-serif"],
        display: ['"Instrument Serif"', "Georgia", '"Times New Roman"', "serif"],
        mono: ["ui-monospace", '"Cascadia Code"', '"SF Mono"', "Menlo", "Consolas", "monospace"],
      },
      maxWidth: {
        page: "72rem",
        prose: "40rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(21, 23, 26, 0.04), 0 8px 24px -12px rgba(21, 23, 26, 0.12)",
        lift: "0 2px 4px rgba(21, 23, 26, 0.05), 0 18px 40px -18px rgba(21, 23, 26, 0.22)",
      },
    },
  },
  plugins: [],
}
