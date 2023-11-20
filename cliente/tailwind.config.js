/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#FF9D00',
        'custom-yellow-hover': '#c07f16',
        'custom-blue': '#171C22',
        'custom-green': '#3EC200',
        'custom-green-hover': '#359d04',
      },
      borderWidth: {
        '12': '12px',
      },
    },
  },
  plugins: [],
}