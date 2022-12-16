/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('bgimg3.webp')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
      
    },
  },
  plugins: [],
}