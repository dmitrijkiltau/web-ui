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
      'base': ['1rem', '1.3'],
      'xs': ['0.8em', '1.3'],
      'sm': ['1.5em', '1.2'],
      'md': ['2em', '1.3'],
      'lg': ['3em', '1.3'],
      'xl': ['4em', '1.2'],
      '2xl': ['5em', '1.2'],
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

