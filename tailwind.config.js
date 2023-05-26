/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        color1: "#729FED",
        color2: "#A2B8D5",
        color3: "#283854",
        color4: "#4D6CA1",
        color5: "#3B527B",
        lightColor1: "#C6D4F6",
        lightColor2: "#5683B8",
        lightColor3: "#406592",
        darkColor1: "#1F2B45",
        darkColor2: "#32406F",
        regalBlue: "#243c5a",
      },
    },
  },
  plugins: [],
};
