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
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  space: {
    14: 56,
    33: 148,
  },
} as const;

export type Theme = typeof theme;
