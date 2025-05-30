module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        racing: ["Racing Sans One", "sans-serif"],
        fira: ["var(--font-fira)", "sans-serif"],
        sans: ['"Poppins"', "sans-serif"],
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
      },
      animation: {
        "gradient-x": "gradient-x 3s ease infinite", // Añade esta línea
      },
      backgroundSize: {
        '200': "200% 200%", // Esto ya lo tienes correctamente
      },
    },
  },
  plugins: [],
};