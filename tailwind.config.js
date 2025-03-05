/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",
    
  ],
  darkMode: 'selector',
  theme: {
  
        container: {
          center: true,
        },
     
    
  },
  plugins: [require('flowbite/plugin'),
    
  ],
}

