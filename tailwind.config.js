/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{jsx}',
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
      '2xl': '1536px',
      'xl': '1280px',
      'lg': '1024px',
      'md': '768px',
      'sm': '640px',
      'm2xl': { 'max': '1535px' },
      'mxl': { 'max': '1279px' },
      'mlg': { 'max': '1023px' },
      'mmd': { 'max': '767px' },
      'msm': { 'max': '639px' }
    },
    fontSize: {
      'h1': ['3.5rem', '3.75rem'],
      'h2': ['2.5rem', '2.5rem'],
      'h3': ['2rem', '2.25rem'],
      'h4': ['1.25rem', '1.5rem'],
      'h5': ['1rem', '1.5rem'],
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

