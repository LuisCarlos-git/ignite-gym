import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
// import { PublicRoutes } from './PublicRoutes';
import { theme } from '@styles/theme';
import { View } from 'react-native';
import { PrivateRoutes } from './PrivateRoutes';

export function Routes() {
  const navigatorTheme = DefaultTheme;
  navigatorTheme.colors.background = theme.colors.gray900;

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.gray900 }}>
      <NavigationContainer theme={navigatorTheme}>
        <PrivateRoutes />
      </NavigationContainer>
    </View>
  );
}
