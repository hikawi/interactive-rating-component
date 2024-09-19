/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(25, 97%, 53%)",
        "light-gray": "hsl(217, 12%, 63%)",
        "dark-blue": "hsl(213, 19%, 18%)",
        "very-dark-blue": "hsl(216, 12%, 8%)",
      },
      fontSize: {
        paragraph: "15px",
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [],
};
