module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        racing: ["Racing Sans One", "sans-serif"],
        fira: ['var(--font-fira)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
