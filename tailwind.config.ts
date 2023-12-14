import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      bg_color: '#282C33',
      primary: '#C778DD',
      my_gray: '#ABB2BF',
      my_white: '#FFFFFF',
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
export default config
