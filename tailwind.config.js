/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
        "primary": "#94e589",
        
        "secondary": "#c190db",
        
        "accent": "#f2a2f0",
        
        "neutral": "#1D202A",
        
        "base-100": "#ffffff",
        
        "info": "#9BD0DF",
        
        "success": "#16887E",
        
        "warning": "#ECC732",
        
        "error": "#F00F26",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

