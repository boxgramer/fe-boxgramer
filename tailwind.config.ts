import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '64px': '64px',
        '40px': '40px',
        '36px': '36px',
        '32px': '32px',
        '24px': '24px',
        '20px': '20px',
        '16px': '16px',
        '14px': '14px',
        '12px': '12px',
      },

      boxShadow: {
        'color-third': '0px -200px 300px 300px   #526D82;',
        'style-1': '0px 0px 50px 50px   #526D82;',

      },
      colors: {
        "primary": "#DDE6ED",
        "secondary": "#9DB2BF",
        "third": "#526D82",
        "base": "#27374D",


      },
      backgroundImage: {

        "about": "url('/image/bg-about.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
