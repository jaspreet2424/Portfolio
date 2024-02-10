/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'ubuntu' : ['Ubuntu', 'sans-serif'],
      },
    },
    screens : {
      'xs' : '640px',
      'sm' : '768px',
      'md' : '992px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1526px',
    }
  },
  plugins: [],
}

