import { DefaultTheme } from 'styled-components/native';

export const theme = {
  colors: {
    green500: '#00B37E',
    green600: '#16a34a',
    green700: '#00875F',

    gray100: '#E1E1E6',
    gray200: '#C4C4CC',
    gray300: '#7C7C8A',
    gray400: '#323238',
    gray500: '#29292E',
    gray600: '#202024',
    gray700: '#121214',
    gray900: '#121214',

    red500: '#F75A68',
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
  },

  space: {
    px: '1px',
    '0': 0,
    '0.5': 2,
    '1': 4,
    '1.5': 6,
    '2': 8,
    '2.5': 10,
    '3': 12,
    '3.5': 14,
    '4': 16,
    '4.5': 18,
    '5': 20,
    '6': 24,
    '7': 28,
    '8': 32,
    '9': 36,
    '10': 40,
    '11': 44,
    '12': 48,
    '14': 56,
    '16': 64,
    '20': 80,
    '24': 96,
    '32': 128,
    '33': 148,
    '40': 160,
    '48': 192,
    '56': 224,
    '64': 256,
    '72': 288,
    '80': 320,
    '96': 384,
    '1/2': '50%',
    '1/3': '33.333%',
    '2/3': '66.666%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666%',
    '2/6': '33.333%',
    '3/6': '50%',
    '4/6': '66.666%',
    '5/6': '83.333%',
    full: '100%',
  },

  radii: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 12,
    '2xl': 16,
    '3xl': 24,
    full: 9999,
  },

  fontSizes: {
    '2xs': 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
    '7xl': 72,
    '8xl': 96,
    '9xl': 128,
  },

  utils: {
    px: (value: number) => `
      padding-left: ${value}px;
      padding-right: ${value}px;
    `,
    py: (value: number) => `
      padding-top: ${value}px;
      padding-bottom: ${value}px;
    `,
  },
} as const;

export type Theme = typeof theme;
