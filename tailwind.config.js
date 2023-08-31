/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'xxs': '320px',
            'xs': '475px',
            ...defaultTheme.screens
            // ...defaultTheme.screens
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                // primary: '#0066FF',
                // primary: 'rgb(251, 146, 60)',
                primary: 'rgb(251, 146, 60)',
                secondary: 'rgba(0, 189, 126, 1)',
                ternary: '#4066ff',
                'property-slide': 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(136,160,255,0.46) 217.91%)',
            },
        },
    },
    // darkMode: "class",
    plugins: [
        nextui()
    ],
}
