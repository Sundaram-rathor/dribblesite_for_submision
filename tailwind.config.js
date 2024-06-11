/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
    },
    keyframes: {
      'infinite-scroll': {
        '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
      }
  },
  plugins: [],
}
  }
}
