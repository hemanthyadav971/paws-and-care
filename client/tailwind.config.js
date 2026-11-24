/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelGreen: {
          50: '#F2F7F4',
          100: '#E2EFE7',
          200: '#C7DFD0',
          300: '#A4CBB2',
          400: '#7EAF8F',
          500: '#5F9572',
          600: '#4A7A5B',
          700: '#3C624A',
          800: '#324F3D',
          900: '#2A4234',
        },
        warmCream: {
          50: '#FDFBF7',
          100: '#FAF6EE',
          200: '#F5ECE0',
          300: '#EDDFCD',
          400: '#E2CCB3',
        },
        coralAccent: {
          50: '#FFF5F2',
          100: '#FFE8E2',
          200: '#FFD3C7',
          300: '#FFB3A1',
          400: '#FF876D',
          500: '#F97316',
          600: '#EA580C',
        },
        beigeBg: '#FAF8F5'
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(95, 149, 114, 0.08)',
        'soft-hover': '0 12px 30px -4px rgba(95, 149, 114, 0.16)',
        'card': '0 2px 12px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
