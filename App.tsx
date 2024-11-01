import { theme } from '@styles/theme';

import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { Loading } from '@components';
import { Routes } from '@routes';

export default function App() {
  const [loaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {!loaded ? <Loading /> : <Routes />}
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
