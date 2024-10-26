import "@/global.css";

import { StatusBar } from "expo-status-bar";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Text } from "./components/ui/text";
import { Center } from "./components/ui/center";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GluestackUIProvider mode="light">
      <Center className="flex-1 bg-red500">
        <Text size="3xl" bold>
          Hello ignite gym
        </Text>
        <StatusBar style="auto" />
      </Center>
    </GluestackUIProvider>
  );
}
