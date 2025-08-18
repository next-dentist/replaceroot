/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary-dark': '#111827',
          'primary-light': '#1F2937',
          'primary-accent': '#00d1c5',
          'text-light': '#E5E7EB',
          'text-medium': '#9CA3AF',
          // Teal colors for clinic page
          'teal': {
            50: '#f0fdfa',
            100: '#ccfbf1',
            200: '#99f6e4',
            300: '#5eead4',
            400: '#2dd4bf',
            500: '#14b8a6',
            600: '#0d9488',
            700: '#0f766e',
            800: '#115e59',
            900: '#134e4a',
          }
        },
        fontFamily: {
          'inter': ['Inter', 'sans-serif'],
        },
        backdropBlur: {
          'xs': '2px',
        }
      },
    },
    plugins: [],
  }
  