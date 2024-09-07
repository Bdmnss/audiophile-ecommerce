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
        'header-home-tablet': "url('/assets/home/tablet/image-header.jpg')",
        'header-home-desktop': "url('/assets/home/desktop/image-header.jpg')",
        'home-circles': "url('/assets/home/desktop/pattern-circles.svg')",
        'zx7-speaker-background-mobile': "url('/assets/home/mobile/image-speaker-zx7.jpg')",
        'zx7-speaker-background-tablet': "url('/assets/home/tablet/image-speaker-zx7.jpg')",
        'zx7-speaker-background-desktop': "url('/assets/home/desktop/image-speaker-zx7.jpg')",
        'YX1-earphones-background-mobile': "url('/assets/home/mobile/image-earphones-yx1.jpg')",
        'YX1-earphones-background-tablet': "url('/assets/home/tablet/image-earphones-yx1.jpg')",
        'YX1-earphones-background-desktop': "url('/assets/home/desktop/image-earphones-yx1.jpg')",
        'best-gear-mobile': "url('/assets/shared/mobile/image-best-gear.jpg')",
        'best-gear-tablet': "url('/assets/shared/tablet/image-best-gear.jpg')",
        'best-gear-desktop': "url('/assets/shared/desktop/image-best-gear.jpg')",
      },
      gridTemplateColumns: {
        'gallery': "275px 395px",
      }
    },
  },
  plugins: [],
};
export default config;
