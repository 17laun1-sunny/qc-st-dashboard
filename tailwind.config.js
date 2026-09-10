/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brandBase: '#F9F8F5',
        brandSurface: '#FFFFFF',
        brandPrimary: '#111827',
        brandSecondary: '#6B7280',
        brandSuccess: '#10B981',
        brandStudent: '#0284C7',
        brandBorder: '#E5E7EB'
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: [],
}
