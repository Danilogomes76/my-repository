import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        peregrin: "url('/assets/peregrin.png')",
        plantation: "url('/assets/plantation.png')",
      },
    },
    colors: {
      bg_color: "#282C33",
      primary: "#C778DD",
      my_gray: "#ABB2BF",
      my_white: "#FFFFFF",
      my_black: "	#000000",
    },
    keyframes: {
      ted: {
        "0%": { transform: "translateY(0px);" },
        "100%": { transform: "translateY(-8px);" },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
