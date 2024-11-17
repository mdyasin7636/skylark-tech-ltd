/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-sky': '#1C75BC',
        'normal-sky': '#2FB3E3',
      },
    },
  },
  plugins: [],
}

