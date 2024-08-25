import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-home-mobile': "url('/assets/home/mobile/image-header.jpg')",
        'home-circles': "url('/assets/home/desktop/pattern-circles.svg')",
        'zx7-speaker-background-mobile': "url('/assets/home/mobile/image-speaker-zx7.jpg')",
        'YX1-earphones-background-mobile': "url('/assets/home/mobile/image-earphones-yx1.jpg')",
        'best-gear-mobile': "url('/assets/shared/mobile/image-best-gear.jpg')",
      }
    },
  },
  plugins: [],
};
export default config;
