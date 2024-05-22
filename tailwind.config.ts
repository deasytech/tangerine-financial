import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        red: {
          "base": "#F76779",
          50: "#FFF1F2",
          100: "#FEE5E7",
          600: "#DC2247",
          900: "#851636"
        },
        green: {
          50: "#F8FEE7",
          90: "#292C27",
          900: "#395314",
          "base": "#7CBB0E",
        },
        gray: {
          10: "#EEEEEE",
          20: "#7C7C7C",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
        orange: {
          50: "#FFFBEC",
          100: "#FFF7D3",
          "base": "#FF9100",
          900: "#82450C",
        },
        blue: {
          base: "#1D0C47",
          50: "#EAEBFF",
          600: "#5E1DFF",
          950: "#000164",
        },
        yellow: {
          50: "#FEC601",
        },
        generic: {
          500: "#7C7C7C",
          700: "#525252",
          800: "#464646",
          950: "#292929",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          50: "#EFFAFF",
          100: "#DEF4FF",
          950: "#04344D",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "3xl": "32px",
        "5xl": "40px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        "gilroy-regular": ["Gilroy-Regular", "sans-serif"],
        "gilroy-black": ["Gilroy-Black", "sans-serif"],
        "gilroy-bold": ["Gilroy-Bold", "sans-serif"],
        "gilroy-light": ["Gilroy-Light", "sans-serif"],
        "gilroy-medium": ["Gilroy-Medium", "sans-serif"],
        "gilroy-semibold": ["Gilroy-SemiBold", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
