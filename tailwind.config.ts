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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textShadow: {
        default: "1px 1px 0px rgba(255, 186, 0, 0.55)",
        md: "2px 2px 0px rgba(255, 186, 0, 0.55)",
        lg: "4px 4px 0px rgba(255, 186, 0, 0.55)",
      },
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
  },
  plugins: [
    // @ts-expect-error
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "1px 1px 0px rgba(255, 186, 0, 0.55)",
        },
        ".text-shadow-md": {
          textShadow: "2px 2px 0px rgba(255, 186, 0, 0.55)",
        },
        ".text-shadow-lg": {
          textShadow: "4px 4px 0px rgba(255, 186, 0, 0.55)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
