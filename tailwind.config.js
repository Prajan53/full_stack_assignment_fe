/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",  // Include files inside pages/
      "./components/**/*.{js,ts,jsx,tsx}",  // Include files inside components/
      "./app/**/*.{js,ts,jsx,tsx}",  // For Next.js App Router (if using `app` directory)
    ],
    theme: {
      extend: {
        fontFamily: {
          satoshi: ["Satoshi", "sans-serif"], // Add Satoshi font
        },
      },
    },
    plugins: [],
  };
  