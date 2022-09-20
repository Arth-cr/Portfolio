/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-green": "#70e000",
      },
      screens: { tall: { raw: "(max-height: 670px)" } },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
