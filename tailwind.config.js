module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        './src/**/*.{html,js}',
    ],
    theme: {
        extend: {
            colors: {
                grayLighter: '#626262',
                grayDarker: '#6F6F6F',
                grayText: '#707070',
                blueButton: '#3673C2',
                footerGray: '#424242',
                copyRight: '#5b5b5b',
            }
        },
    },
    plugins: [],
}
