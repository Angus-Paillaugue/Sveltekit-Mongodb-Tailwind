/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte}',
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:["Poppins"]
      },
      colors: {
        primary: {
          '50': '#fff8f2', 
          '100': '#fff1e6', 
          '200': '#ffd8bf', 
          '300': '#ffb899', 
          '400': '#ff674d', 
          '500': '#ff0000', 
          '600': '#e60000', 
          '700': '#bf0000', 
          '800': '#990000', 
          '900': '#730000', 
          '950': '#4a0000'
        },
        "text-main":"#2D2E32"
      },
      boxShadow: {
        "sm":"rgba(0, 0, 0, 0.12) 0px 0px 8px",
        "md":"rgba(0, 0, 0, 0.12) 0px 4px 10px",
        "lg":"rgba(0, 0, 0, 0.12) 0px 6px 16px",
        "xl":"rgba(0, 0, 0, 0.18) 0px 8px 20px",
      },
      borderRadius: {
        lg:"0.75rem"
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
  darkMode: 'class',
}