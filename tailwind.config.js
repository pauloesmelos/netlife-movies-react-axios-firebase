/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "movies": "url(https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg)"
      },
      keyframes: {
        piscar: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-1rem)" },
          "100%": { transform: "translateY(0)" }
        },
        pong: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-.3rem)" },
          "100%": { transform: "translateY(0)" },
        }
      },
      animation: {
        piscar: "piscar 2s infinite linear",
        pong: "pong 2s infinite"
      }
    },
  },
  plugins: [],
}