import '@/global.css';

import { StatusBar } from 'expo-status-bar';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';

import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

import { Loading } from '@/components/loading';
import { SignIn } from '@/screens/sign-in';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <GluestackUIProvider mode="light">
      <SignIn />
      <StatusBar style="auto" />
    </GluestackUIProvider>
  );
}
