/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                're': {'min': '1366px', 'max': '1536px'},
            },
        },
    },
    plugins: [],
}