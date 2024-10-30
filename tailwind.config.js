// tailwind.config.js
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",  // Add this line
    "./src/**/*.{js,jsx,ts,tsx}",       // Adjust to your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')           // Add Flowbite as a plugin
  ],
}
