import type { Config } from 'tailwindcss';

// Plugins:
import defaultTheme from 'tailwindcss/defaultTheme';
import twTypography from '@tailwindcss/typography';

const config = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            'h1 a': {
              'text-decoration': 'none'
            },
            'h2 a': {
              'text-decoration': 'none'
            },
            blockquote: {
              'font-style': 'normal'
            }
          }
        }
      },
      colors: {
        dark: '#161616',
        light: '#f5f5f5'
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
        mono: ['GeistMono', ...defaultTheme.fontFamily.mono]
      },
      fontSize: {
        mini: '14px'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--bits-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--bits-accordion-content-height)' },
          to: { height: '0' }
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite'
      }
    }
  },
  plugins: [
    twTypography,
    ({ addUtilities }) => {
      addUtilities({
        '.text-balance': {
          'text-wrap': 'balance'
        }
      });
    }
  ]
} satisfies Config;

export default config;
