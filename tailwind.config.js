/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: '#1E1B4B',
        secondary: '#4338CA',
        accent: '#06B6D4',
        'accent-light': '#CFFAFE',
        background: '#F8FAFF',
        surface: '#FFFFFF',
        foreground: '#0F0E1A',
        muted: '#64748B',
        'border-subtle': 'rgba(67, 56, 202, 0.12)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4338CA 0%, #06B6D4 100%)',
        'gradient-hero': 'linear-gradient(135deg, #1E1B4B 0%, #4338CA 50%, #06B6D4 100%)',
        'gradient-cta': 'linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #1E3A5F 100%)',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(6, 182, 212, 0.2)',
        'glow-md': '0 0 40px rgba(6, 182, 212, 0.35)',
        'indigo-sm': '0 4px 20px rgba(67, 56, 202, 0.2)',
        'indigo-md': '0 8px 40px rgba(67, 56, 202, 0.3)',
        'card': '0 4px 24px rgba(30, 27, 75, 0.08)',
        'card-hover': '0 16px 48px rgba(30, 27, 75, 0.14)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      animation: {
        'float-1': 'floatY 6s ease-in-out infinite',
        'float-2': 'floatY2 8s ease-in-out infinite 1s',
        'float-3': 'floatY3 7s ease-in-out infinite 2s',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
        'gradient': 'gradientShift 6s ease infinite',
        'scan': 'scanLine 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-scale': 'fadeInScale 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
};
