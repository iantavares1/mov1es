import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#001524",
        secondary: "#001d3d",
        tertiary: "#003566",
        light: "#FFC300",
        ultraLight: "#FFD60A",
      },
      textColor: {
        onPrimary: "#FFFFFF",
        onSecondary: "#FFFFFF",
        onTertiary: "#FFFFFF",
        onLight: "#000000",
        onUltraLight: "#000000",
      },
    },
  },
  plugins: [],
}

export default config
