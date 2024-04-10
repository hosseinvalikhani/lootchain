/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkGray: "hsl(0, 0%, 74%)",
        darkViolet: "hsl(271,70%,60%)",
        lightBlue: "hsl(214,84%,56%)",
        lightGray: "hsla(0, 0%, 100%, 0.5)",
        lightenGray: "hsla(0, 0%, 100%, 0.09)",
        lowGray: "hsla(249, 19%, 14%, 0.58)",
        hardGray: "hsla(249, 19%, 14%, 1)",
        darkBlue: "hsla(250,20%,12%, 1)",
      },
      fontFamily: {
        sans: ["poppins", "sans-serif"],
        opensans: ["lato", "sans-serif"],
        mono: ["gelasio", "sans-serif"],
        roboto: ["roboto", "sans-serif"],
        worksans: ["worksans", "sans-serif"],
        inter: ["inter", "sans-serif"],
      },
      boxShadow: {
        innerb: "inset 0px -1px 0px 0px hsl(214,84%,56%)",
        innerbb: "inset 0px 1px 0px 0px hsl(271,70%,60%)",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
