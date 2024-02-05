/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['"Roboto", sans-serif'],
    },
    extend: {
      gridTemplateAreas: {
        form: [
          'cep . .',
          'rua rua rua',
          'numero complemento complemento',
          'bairro cidade uf',
        ],
      },
      maxWidth: {
        app: '70rem',
      },
      fontFamily: {
        secondary: ['"Baloo 2", sans-serif'],
      },
      colors: {
        yellow: '#DBAC2C',
        'yellow-light': '#F1E9C9',
        'yellow-dark': '#C47F17',

        purple: '#8047F8',
        'purple-light': '#EBE5F9',
        'purple-dark': '#4B2995',

        'base-title': '#272221',
        'base-subtitle': '#403937',
        'base-text': '#574F4D',
        'base-label': '#8D8686',
        'base-hover': '#D7D5D5',

        'base-button': '#E6E5E5',
        'base-input': '#EDEDED',
        'base-card': '#F3F2F2',

        background: '#FAFAFA',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
}
