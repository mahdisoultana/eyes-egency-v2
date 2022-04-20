module.exports = {
  important: true,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", "sans-serif"],
        serif: ["Amiri", "Roboto Slab", "serif"],
      },
      colors: {
        brand: "#30B2D2",
        secondary: "#023564",
      },
      backgroundImage: (theme) => ({
        check: "url('/icons/check.svg')",
        landscape: "url('/images/landscape/2.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
