import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        dl: {
          navy: '#0C2340',        // deep maritime navy — primary brand
          blue: '#1B4F8A',        // harbour blue — links / secondary
          teal: '#1C8C8A',        // coastal teal — eyebrow labels / accents
          gold: '#C7A15B',        // champagne brass — signature rule / detail
          sky: '#8FB9C7',         // soft coastal
          sand: '#EFE7D6',        // warm neutral background
          ink: '#12161C',         // near-black text
        },
      },
      fontFamily: {
        'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'body': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'serif': ['var(--font-playfair)', 'Georgia', 'serif'],
        'display': ['var(--font-playfair)', 'Georgia', 'serif'],
        'heading': ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
