/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: '#root',
  theme: {
    extend: {
      fontFamily: {
        'Kantumruy Pro': ['Kantumruy Pro']
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}

