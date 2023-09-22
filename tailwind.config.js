/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx',
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      primary: {
        'DEFAULT': 'hsl(0, 0%, 0%)',
        '100': 'hsl(0, 0%, 100%)',
        '95': 'hsl(0, 0%, 95%)',
        '80': 'hsl(0, 0%, 80%)',
        '60': 'hsl(0, 0%, 60%)',
        '40': 'hsl(0, 0%, 40%)',
        '20': 'hsl(0, 0%, 20%)',
        '5': 'hsl(0, 0%, 5%)',
      },
    },
    screens: {
      'msm': { 'max': '419px' },
      'sm': '420px',
      'mmd': { 'max': '767px' },
      'md': '768px',
      'mlg': { 'max': '1023px' },
      'lg': '1024px',
      'mxl': { 'max': '1279px' },
      'xl': '1280px',
      'm2xl': { 'max': '1535px' },
      '2xl': '1536px',
    },
    fontSize: {
      'h1': ['clamp(3.5rem, 10vw, 5rem)', 'clamp(4.125rem, 10vw, 5.625rem)'],
      'h2': ['clamp(2rem, 10vw, 2.5rem)', 'clamp(2.25rem, 10vw, 2.5rem)'],
      'h3': ['clamp(1.25rem, 10vw, 2rem)', 'clamp(1.5rem, 10vw, 2.25rem)'],
      'h4': ['clamp(1rem, 10vw, 1.25rem)', 'clamp(1.25rem, 10vw, 1.5rem)'],
      'h5': ['clamp(0.875rem, 10vw, 1rem)', 'clamp(1rem, 10vw, 1.5rem)'],
      'h6': ['0.875rem', '1.25rem'],
      'base': ['1rem', '1.25rem'],
    },
    extend: {
      width: {
        '2xl': '1536px',
        'xl': '1280px',
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
    },
  },
  plugins: [],
}

