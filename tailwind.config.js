module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false,
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#6EC5E9",
        secondary: "#003A6F",
        danger: "#FF5959",
        warning: "#FFC56C",
        fade: "#F2F1F1",
      },
      width: { open: "calc(100% - 18rem )", close: "calc(100% - 5rem )" },
    },
  },
};
