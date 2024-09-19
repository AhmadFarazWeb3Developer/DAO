/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

const config = {
  content: ["./src/**/*.{js,jsx,ts,txs}"],

  theme: {
    extend: {},
  },
  plugins: [daisyui],
};

export default config;
