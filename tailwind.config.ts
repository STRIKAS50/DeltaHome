import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const config: Config = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // darkMode: "class",
  theme: {

    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
        gluton: ['var(--font-gluton)'],

      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        'transparent-gray': 'rgba(31, 41, 55, 0.1)',
        'transparent-white': 'rgba(255, 255, 255, 0.1)',
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    animation: {
      first: "moveVertical 30s ease infinite",
      second: "moveInCircle 20s reverse infinite",
      third: "moveInCircle 40s linear infinite",
      fourth: "moveHorizontal 40s ease infinite",
      fifth: "moveInCircle 20s ease infinite",
      meteor: "meteor 5s linear infinite",
      marquee: "marquee var(--duration) linear infinite",
      "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      grid: "grid 15s linear infinite",
      orbit: "orbit calc(var(--duration)*1s) linear infinite",
      "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
    },

    keyframes: {
      "border-beam": {
        "100%": {
          "offset-distance": "100%",
        },
      },
      moveHorizontal: {
        "0%": {
          transform: "translateX(-50%) translateY(-10%)",
        },
        "50%": {
          transform: "translateX(50%) translateY(10%)",
        },
        "100%": {
          transform: "translateX(-50%) translateY(-10%)",
        },
      },
      moveInCircle: {
        "0%": {
          transform: "rotate(0deg)",
        },
        "50%": {
          transform: "rotate(180deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
      moveVertical: {
        "0%": {
          transform: "translateY(-50%)",
        },
        "50%": {
          transform: "translateY(50%)",
        },
        "100%": {
          transform: "translateY(-50%)",
        },
      },
      meteor: {
        "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
        "70%": { opacity: "1" },
        "100%": {
          transform: "rotate(215deg) translateX(-500px)",
          opacity: "0",
        },
      },
      orbit: {
        "0%": {
          transform: "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
        },
        "100%": {
          transform: "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
        },
      },
      grid: {
        "0%": { transform: "translateY(-50%)" },
        "100%": { transform: "translateY(0)" },
      },
      marquee: {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(calc(-100% - var(--gap)))" },
      },
      "marquee-vertical": {
        from: { transform: "translateY(0)" },
        to: { transform: "translateY(calc(-100% - var(--gap)))" },
      },
    },
  },
  plugins: [addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
    require("tailwindcss-animate")
  ],

};
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
