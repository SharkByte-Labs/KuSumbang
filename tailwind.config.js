/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './layout/**/*.{html,js}',
        './src/**/*.{html,js}', // mencakup semua di src termasuk /pages
    ],

    theme: {
        extend: {
            screens: {
                xl1440: '1440px',
            },
            colors: {
                primary: '#C1E965',
                secondary: '#374F00',
                text: '#2F2F2F',
                zinc: {
                    50: '#f8fafc',
                    100: '#F4F4F5',
                    200: '#e2e8f0',
                    300: '#D4D4D8',
                    400: '#A1A1AA',
                    500: '#71717A',
                    600: '#475569',
                    700: '#3F3F46',
                    800: '#1e293b',
                    900: '#0f172a',
                },
            },
            fontSize: {
                sm: 'clamp(0.875rem, 0.7813rem + 0.1875vw, 0.875rem)',
                base: 'clamp(0.875rem, 0.7813rem + 0.3125vw, 1rem)',
                lg: 'clamp(0.875rem, 0.6958rem + 0.5729vw, 1.125rem)',
                xl: 'clamp(1rem, 0.9063rem + 0.3125vw, 1.25rem)',
                '2xl': 'clamp(1rem, 0.8125rem + 0.625vw, 1.5rem)',
                '3xl': 'clamp(1rem, 0.7188rem + 0.9375vw, 1.875rem)',
                '4xl': 'clamp(1rem, 0.625rem + 1.25vw, 2.25rem)',
                '5xl': 'clamp(1.5rem, 0.6875rem + 1.5625vw, 3rem)',
                '6xl': 'clamp(1.5rem, -1.5rem + 8vw, 3.75rem)',
                '7xl': 'clamp(1.5rem, 0.25rem + 3.125vw, 4.5rem)',
                '8xl': 'clamp(1.5rem, -0.1875rem + 4.6875vw, 6rem)',
                '9xl': 'clamp(1.5rem, -0.625rem + 6.25vw, 8rem)',
                fluid150: 'clamp(3.5rem, -1.5rem + 8vw, 9.375rem);', // 150px
                fluid250: 'clamp(3rem, -10.8594rem + 28.25vw, 15.625rem)', //250px
            },
            backgroundImage: {
                decor1: "url('/src/assets/decoration-2.svg')",
                gridbg: "url('/src/assets/Grid%20layers.png')",
            },
        },
    },
    plugins: [],
};
