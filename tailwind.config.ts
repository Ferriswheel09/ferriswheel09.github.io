import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gothic: ['Gothic A1', 'sans-serif'],
        abel: ['Abel', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',  
        "navbar-blue": "#6A88A5",
        "button-teal": "#D9D9D9",
        "post-card": "#EFEFEF",
        "grad-purp": "#750072",
        "grad-blue": "#00829d",
      }, 
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
        "navbar-gradient": 'linear-gradient(90deg, rgba(145,4,141,1) 0%, rgba(0,0,0,1) 55%, rgba(0,212,255,1) 100%)',
    },
  },
  plugins: [],
};
export default config;
