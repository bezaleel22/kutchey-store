// import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        first: "hsl(176, 88%, 27%)",
        "first-alt": "hsl(129, 44%, 94%)",
        second: "hsl(34, 94%, 87%)",
        title: "hsl(0, 0%, 13%)",
        text: "hsl(154, 13%, 32%)",
        "text-light": "hsl(60, 1%, 56%)",
        body: "hsl(0, 0%, 100%)",
        container: "hsl(0, 0%, 93%)",
        border: "hsl(129, 36%, 85%)",
        "border-alt": "hsl(113, 15%, 90%)",
      },
      fontFamily: {
        body: ["Lato", "sans-serif"],
        second: ["Spartan", "sans-serif"],
      },
      fontSize: {
        big: "3.5rem",
        h1: "2.75rem",
        h2: "2rem",
        h3: "1.75rem",
        h4: "1.375rem",
        large: "1.125rem",
        normal: "1rem",
        small: "0.875rem",
        smaller: "0.75rem",
        tiny: "0.6875rem",
      },
      fontWeight: {
        400: 400,
        500: 500,
        600: 600,
        700: 700,
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0, 0, 0.05, 1)",
      },
      height: {
        header: "4rem",
      },
    },
  },

  // plugins: [iconsPlugin({ collections: getIconCollections(["ion"]) })],
};
