/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/styles/**/*.css",
    "./gatsby-config.js",
    "./gatsby-browser.js",
  ],
  theme: {
    extend: {
      colors: {
        "dark-grey": "#777778",
        "light-grey": "#bebebe",
        "dark-bg": "#151515",
        "box-bg": "#1b1b1d",
        cfcfcf: "#cfcfcf",
        e2e2e2: "#e2e2e2",
      },
      animation: {
        flash: "flash 5s ease-in-out 0s 1",
        flashTwo: "flashTwo 5s ease-in-out 0s 1",
        slide: "slide 0.3s linear",
        float: "float 6s ease-in-out infinite",
        float2: "float2 8s ease-in-out infinite",
        float3: "float3 7s ease-in-out infinite",
        fadeIn: "fadeIn 1s ease-in-out",
        slideUp: "slideUp 0.8s ease-out",
      },
      keyframes: {
        flash: {
          "0%": {
            color: "#777778",
          },
          "20%": {
            color: "#cecece",
          },
          "30%": {
            color: "#fff",
          },
          "40%": {
            color: "#b4b4b4",
          },
          "45%": {
            color: "#777778",
          },
          "100%": {
            color: "#fff",
          },
        },
        flashTwo: {
          "0%": {
            color: " #cecece",
          },

          "20%": {
            color: " #fff",
          },
          "30%": {
            color: " #777778",
          },
          "40%": {
            color: " #cecece",
          },
          "45%": {
            color: " #777778",
          },
          "100%": {
            color: "#fff",
          },
        },
        slide: {
          "0%": {
            opacity: 0,
            transform: "translateY(-50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        float2: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-8px)",
          },
        },
        float3: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        slideUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
