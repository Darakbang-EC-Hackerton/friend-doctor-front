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
        GowunBatangRegular: ['https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunBatang-Regular.woff'],
        InkLipquid: ['https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/InkLipquid.woff']
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}

