/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "390px",
        md: "765px",
        lg: "1280px",
      },
    },
  },
  plugins: [],
};
