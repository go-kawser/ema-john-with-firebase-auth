/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF9900",
        "primary-light": "rgba(255, 153, 0, 0.3)",
        error: "#FF3030",
      },
    },
  },
  plugins: [],
};
