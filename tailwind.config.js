// tailwind.config.js
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js", // Add this line
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust to your project structure
  ],
  theme: {
    extend: {
      screens: {
        "max-sm": { max: "640px" },
        "max-md": { max: "902px" },
        "max-lg": { max: "1024px" },
        "max-xl": { max: "1280px" },
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), // Add Flowbite as a plugin
  ],
};
