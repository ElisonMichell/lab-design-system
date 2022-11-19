/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'headings': ['Poppins', 'sans-serif']
    },
    colors: {
      transparent: 'rgba(0,0,0,0)',
      dark: {
        100: '#32435C',
        200: '#1C2541',
        300: '#21273A'
      },
      light: {
        100: '#FFFFFF',
        200: '#EDEDED',
        300: '#989898'
      },
      primary: {
        100: '#00A1E0',
        200: '#0084B8',
        300: '#006992',
        DEFAULT: '#0084B8'
      }
    },
    fontSize: {
      'body-xs': ['0.75rem', {
        lineHeight: '1rem',
        fontWeight: '500',
      }],
      'body-sm': ['0.875rem', {
        lineHeight: '1.25rem',
        fontWeight: '500',
      }],
      'body-md': ['1rem', {
        lineHeight: '1.5rem',
        fontWeight: '500',
      }],
      'body-lg': ['1.25rem', {
        lineHeight: '1.75rem',
        fontWeight: '500',
      }],
      'body-xl': ['1.5rem', {
        lineHeight: '2rem',
        fontWeight: '500',
      }],
      'heading-xs': ['1.875rem', {
        lineHeight: '2.25rem',
        fontWeight: '600',
      }],
      'heading-sm': ['2.25rem', {
        lineHeight: '2.5rem',
        fontWeight: '600',
      }],
      'heading-md': ['3rem', {
        lineHeight: '1',
        fontWeight: '600',
      }],
      'heading-lg': ['3.75rem', {
        lineHeight: '1',
        fontWeight: '600',
      }],
      'heading-xl': ['6rem', {
        lineHeight: '1',
        fontWeight: '600',
      }],
    },
    dropShadow: {
      default: '0 4px 2px rgba(0, 0, 0, 0.3)',
      '3D': ['0 4px 2px rgba(0, 0, 0, 0.3)', '0 -4px 2px #FFFFFF']
    },
    extend: {},
  }
}
