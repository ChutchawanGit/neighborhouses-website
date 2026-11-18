import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-urbanist)', 'var(--font-prompt)', '"Urbanist"', '"Prompt"', 'system-ui', 'sans-serif'],
        urbanist: ['"Urbanist"', 'sans-serif'],
        prompt: ['"Prompt"', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        
        // Oasel Signature Design System Tokens
        oasel: {
          bg: '#f4ede2',          // warm sand canvas
          paper: '#faf5ec',       // warm paper
          card: '#fff9ed',        // warm milky card base
          panel: '#faf3e6',       // panel surface
          well: 'rgba(70, 48, 20, 0.07)',
          ink: '#2a2014',         // deep espresso
          'ink-2': '#44362a',     // medium espresso
          muted: '#6e5f50',       // warm muted text
          line: 'rgba(60, 40, 15, 0.11)',
          'line-2': 'rgba(60, 40, 15, 0.18)',
          lime: '#c8f94a',        // electric lime highlight
          'lime-hover': '#b7ee34',
          'lime-deep': '#457a00',
          'lime-soft': 'rgba(200, 249, 74, 0.22)',
          butter: '#f3df86',      // warm butter tile
          mint: '#bfe9b4',        // soft mint tile
          sand: '#ecd2b0',        // warm sand tile
          dusk: '#1b150f',        // deep umber (dusk theme)
          'dusk-card': '#241b12', // dusk card
          'dusk-ink': '#f7efe1',  // dusk warm bone
        }
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        'oasel-glass': 'inset 0 0 0 1px rgba(60, 40, 15, 0.08), inset 1px 1px 0 rgba(255, 255, 255, 0.8), 0 8px 30px -8px rgba(70, 44, 14, 0.08)',
        'oasel-float': 'inset 0 0 0 1px rgba(60, 40, 15, 0.09), inset 1px 1px 0 rgba(255, 255, 255, 0.9), 0 18px 42px -20px rgba(70, 44, 14, 0.16)',
        'oasel-lime': '0 4px 20px -2px rgba(200, 249, 74, 0.45)',
        'oasel-dusk': 'inset 0 0 0 1px rgba(255, 238, 210, 0.12), inset 1px 1px 0 rgba(255, 246, 228, 0.2), 0 20px 50px -15px rgba(0, 0, 0, 0.5)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '5rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
