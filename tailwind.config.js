/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark"
    ]
  }
}

