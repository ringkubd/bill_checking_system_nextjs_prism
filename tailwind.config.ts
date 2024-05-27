import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        noise: "url('/noise.png')"
      },
      backgroundColor: {
        header: "#EFF4F9",
        "body-header": "#008080",
        "body-header-deep": "#023d3d",
        "layout-primary": "#6bcc94",
        "layout-secondary": "#f6f8f6",
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      boxShadow: {
        gradient: 'linear-gradient(90deg,0 4px 10px rgba(127, 232, 164, 0.5),\n' +
            '                0 4px 20px rgba(127, 250, 0, 0.5),\n' +
            '                0 4px 30px rgba(127, 255, 40, 0.5));'
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(180, 228, 196, 0.5)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      textColor: {
        button: '#008080'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};
export default config;
