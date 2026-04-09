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
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%, 75%': { transform: 'scale(1.08)' },
          '50%': { transform: 'scale(1.16)' },
        },
      },
      animation: {
        heartbeat: 'heartbeat 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

