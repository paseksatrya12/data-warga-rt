/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'outline-variant': '#bdc9c8',
        'on-surface-variant': '#3e4949',
        'tertiary-fixed': '#ffdbcc',
        'surface-variant': '#d9e3f6',
        secondary: '#106966',
        'on-secondary-fixed': '#00201e',
        'primary-fixed': '#90f3f3',
        'on-tertiary': '#ffffff',
        'on-secondary-fixed-variant': '#00504d',
        'on-tertiary-container': '#fffbff',
        'secondary-container': '#a1ede8',
        'on-secondary-container': '#186e6a',
        'secondary-fixed-dim': '#88d4cf',
        'primary-fixed-dim': '#73d6d7',
        'inverse-primary': '#73d6d7',
        'inverse-on-surface': '#eaf1ff',
        'error-container': '#ffdad6',
        outline: '#6e7979',
        'on-background': '#121c2a',
        'on-primary-container': '#f3fffe',
        'on-error': '#ffffff',
        'tertiary-container': '#bb5822',
        'secondary-fixed': '#a4f0eb',
        'surface-container-highest': '#d9e3f6',
        tertiary: '#9b4008',
        error: '#ba1a1a',
        'on-primary': '#ffffff',
        'surface-container-low': '#eff4ff',
        'on-primary-fixed': '#002020',
        'surface-container-lowest': '#ffffff',
        'on-tertiary-fixed-variant': '#7b2f00',
        'surface-dim': '#d0dbed',
        'primary-container': '#008283',
        primary: '#006768',
        'surface-container-high': '#dee9fc',
        'on-tertiary-fixed': '#351000',
        surface: '#f8f9ff',
        'on-surface': '#121c2a',
        'inverse-surface': '#27313f',
        'surface-container': '#e6eeff',
        'on-secondary': '#ffffff',
        'surface-bright': '#f8f9ff',
        'on-error-container': '#93000a',
        background: '#f8f9ff',
        'tertiary-fixed-dim': '#ffb694',
        'surface-tint': '#00696a',
        'on-primary-fixed-variant': '#004f50'
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px'
      },
      spacing: {
        'gutter-mobile': '1rem',
        'space-xs': '0.25rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        gutter: '1.5rem',
        'space-sm': '0.5rem',
        'space-xl': '2rem',
        margin: '2rem',
        'margin-mobile': '1rem'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'body-sm': ['12px', { lineHeight: '18px', fontWeight: '400' }],
        'label-lg': ['14px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '600' }],
        'title-md': ['16px', { lineHeight: '24px', fontWeight: '600' }],
        'label-sm': ['10px', { lineHeight: '14px', letterSpacing: '0.04em', fontWeight: '700' }],
        'label-md': ['12px', { lineHeight: '16px', letterSpacing: '0.02em', fontWeight: '600' }],
        'body-lg': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-md': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'headline-sm': ['20px', { lineHeight: '28px', letterSpacing: '-0.005em', fontWeight: '600' }],
        'headline-md': ['24px', { lineHeight: '32px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '-0.015em', fontWeight: '700' }],
        'title-lg': ['18px', { lineHeight: '26px', fontWeight: '600' }]
      }
    }
  },
  plugins: []
}
