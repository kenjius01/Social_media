/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        
    ],
    theme: {
        extend: {
            colors: {
                'primary-yellow': '#f5c32c',
                'primary-orange': '#fca61f',
                'primary-black': '#242d49',
                'primary-gray': 'rgba(36, 45, 73, 0.65)',
                'hr-color': '#cfcdcd',
                'card-color': 'rgba(255, 255, 255, 0.64)',
                'button-bg':
                    'linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)',
                'input-color': 'rgba(40, 52, 62, 0.07)',
                'photo-color': '#4CB256',
                'video-color': '#4A4EB7',
                'location-color': '#EF5757',
                'shedule-color': '#E1AE4A',
            },
            boxShadow: {
                'profile-shadow': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            },
        },
        fontFamily: {
            'akaya':['Akaya Telivigala', 'cursive']
        }
    },
    plugins: [],
};
