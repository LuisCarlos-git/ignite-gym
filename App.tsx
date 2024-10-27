import { SignIn } from '@/screens/sign-in';
import { theme } from '@/styles/theme';

import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
      <StatusBar />
    </ThemeProvider>
  );
}
