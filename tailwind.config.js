/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Montserrat', 'sans-serif'],
        'secondary': ['Poppins', 'sans-serif'],
      }, 
      colors: {
        'primary': '#884A39',
        'secondary': '#FFC26F',
        'background': "#F9E0BB"
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}
