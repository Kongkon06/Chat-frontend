/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        grotesque: ['Darker Grotesque', 'sans-serif'],
        tanseek: ['Tanseek Modern', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace']
      },
    },
  },
  plugins: [],
}
