/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific row configuration
        layout: "28.65% repeat(2, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
