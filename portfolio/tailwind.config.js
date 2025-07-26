import plugin from 'tailwindcss/plugin'

export default {
  darkMode: 'class',
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        main: "#222326",
        secondary: "#d7d7d9",
        button: "#9fa3a6",
        buttonS: "#3c3d40",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.mask-fade-x': {
          maskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)',
        }
      })
    })
  ],
};
