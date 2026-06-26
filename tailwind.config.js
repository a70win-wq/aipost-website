/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
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
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // ===== AIPOST 品牌色系 =====
        brand: {
          pink: '#EC4899',
          'pink-light': '#FDF2F8',
          'pink-soft': '#FCE7F3',
          orange: '#F97316',
          'orange-light': '#FFF7ED',
          'orange-soft': '#FED7AA',
          purple: '#8B5CF6',
          'purple-light': '#F5F3FF',
          cyan: '#67E8F9',
          mint: '#86EFAC',
          dark: '#1E1B4B',
          ink: '#101014',
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        card: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        'card-hover': "0 10px 30px -10px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.05)",
        'glass': "0 24px 80px -36px rgba(30,27,75,0.28), 0 12px 32px -24px rgba(236,72,153,0.32)",
        'soft-panel': "0 18px 60px -44px rgba(30,27,75,0.45)",
        'glow-pink': "0 0 20px rgba(236,72,153,0.3)",
        'glow-purple': "0 0 20px rgba(139,92,246,0.3)",
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #EC4899 0%, #F97316 50%, #8B5CF6 100%)',
        'brand-gradient-hover': 'linear-gradient(135deg, #DB2780 0%, #EA5C0A 50%, #7C3AED 100%)',
        'brand-gradient-text': 'linear-gradient(135deg, #EC4899, #8B5CF6)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(236,72,153,0.16), rgba(249,115,22,0.13), rgba(139,92,246,0.14))',
        'hero-glow': 'radial-gradient(circle at 30% 50%, rgba(236,72,153,0.12) 0%, rgba(139,92,246,0.08) 50%, transparent 70%)',
        'cta-glow': 'radial-gradient(circle at center, rgba(236,72,153,0.15), rgba(249,115,22,0.1), rgba(139,92,246,0.1), transparent 70%)',
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
