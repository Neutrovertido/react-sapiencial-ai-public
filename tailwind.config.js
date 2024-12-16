/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        rowdies: ["Rowdies", "sans-serif"],
      },
      colors: {
        'dark-gray': '#1a1a1a',
        'dark-header-gray': '#333333',
      },
    },
  },
  plugins: [],
}