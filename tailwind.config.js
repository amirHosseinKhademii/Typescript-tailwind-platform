const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "blue-gray": colors.blueGray,
        rose: colors.rose,
        teal: colors.teal,
        lime: colors.lime,
        orange: colors.orange,
        amber: colors.amber,
        cyan: colors.cyan,
        primary: "#6EC5E9",
        secondary: "#003A6F",
        danger: "#FF5959",
        warning: "#FFC56C",
        fade: "#F2F1F1",
      },
      width: { open: "calc(100% - 18rem )", close: "calc(100% - 5rem )" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-background-extended"),
    require("tailwindcss-gradients"),
  ],
};
