// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // must include this if using React
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
