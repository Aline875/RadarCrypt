import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Ativa o dark mode
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-light': '#f1f5ff',
        'font-color': '#171717',
        'custom-button': '#1c58f4',
        'cusotm-gray': '#86878b',
        'dark-background': '#171717', // Adiciona uma cor para o modo escuro
        'dark-font': '#f1f5ff', // Cor do texto para o modo escuro
      },
    },
  },
  plugins: [],
};

export default config;
