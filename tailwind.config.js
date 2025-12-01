/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#D32F2F',
                secondary: '#000000',
                accent: '#FF5252',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'soft': '0 2px 15px rgba(0, 0, 0, 0.1)',
                'hover': '0 10px 30px rgba(211, 47, 47, 0.2)',
            },
        },
    },
    plugins: [],
}
