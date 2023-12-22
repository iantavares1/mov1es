import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "420px",
        md: "640px",
        lg: "860px",
        xl: "1024px",
        "2xl": "1280px",
        "4xl": "1600px",
        "6xl": "1920px",
      },
      colors: {
        primary: "#001524",
        onPrimary: "#FFFFFF",
        secondary: "#001d3d",
        onSecondary: "#FFFFFF",
        tertiary: "#003566",
        onTertiary: "#FFFFFF",
        light: "#FFC300",
        onLight: "#000000",
        ultraLight: "#FFD60A",
        onUltraLight: "#000000",
      },
      spacing: {
        100: "5px",
        200: "10px",
        300: "15px",
        400: "20px",
        500: "25px",
        600: "30px",
        700: "35px",
        800: "40px",
        900: "45px",
        1000: "50px",
      },
      gridTemplateColumns: {
        100: "repeat(auto-fill, minmax(95px, 1fr))",
        200: "repeat(auto-fill, minmax(130px, 1fr))",
        300: "repeat(auto-fill, minmax(170px, 1fr))",
        400: "repeat(auto-fill, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}

export default config
