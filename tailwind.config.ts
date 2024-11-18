import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			analog: {
  				green: '#A6FA7E',
  				blue: '#7EE3FA',
  				orange: '#FF9A51'
  			},
  			primary: {
  				green: '#84F84D',
  				blue: '#4DD8F8',
  				orange: '#FF7C1E',
  				light: '#84F84D',
  				DEFAULT: '#62F61C',
  				dark: '#4BD609'
  			},
  			secondary: {
  				green: '#62F61C',
  				blue: '#1CCDF6',
  				orange: '#EA6200',
  				light: '#4DD8F8',
  				DEFAULT: '#1CCDF6',
  				dark: '#09B9D6'
  			},
  			tertiary: {
  				green: '#4BD609',
  				blue: '#09B9D6',
  				orange: '#EA6200',
  				light: '#FF7C1E',
  				DEFAULT: '#EA6200',
  				dark: '#DB5C00'
  			},
  			quaternary: {
  				green: '#1f6300',
  				blue: '#005265',
  				orange: '#5d2700',
  				light: '#FF7C1E',
  				DEFAULT: '#EA6200',
  				dark: '#DB5C00'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			sans: ['Roboto', 'sans-serif'],
  			serif: ['Roboto Slab', 'serif']
  		},
  		fontSize: {
  			'caption-default': 'var(--caption-default)',
  			'caption-small': 'var(--caption-small)',
  			'body-small': 'var(--body-small)',
  			'body-default': 'var(--body-default)',
  			'body-large': 'var(--body-large)',
  			'heading-small': 'var(--heading-small)',
  			'heading-default': 'var(--heading-default)',
  			'heading-large': 'var(--heading-large)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [nextui(), require('tailwindcss-animate')],
};
export default config;
