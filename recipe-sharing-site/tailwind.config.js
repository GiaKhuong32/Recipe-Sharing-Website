/** @type {import('tailwindcss').Config} */
module.exports = {
  // Thêm 'class' để bật chế độ tối dựa trên class
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Bao gồm tất cả các tệp JS, JSX, TS, TSX trong thư mục src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}