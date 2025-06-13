module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#252323",    
        secondary: "#415A77",  // Steel Blue
        accent: "#252323",     // Machinery Yellow
        lightGray: "#778DA9",  // Cool Gray
        dark: "#0B132B",       // Deep Navy/Almost Black
        rust: "#B14F3A",       // Optional Rust Red
      },
      fontFamily: {
         montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
