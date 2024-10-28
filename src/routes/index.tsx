import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { PublicRoutes } from './PublicRoutes';
import { theme } from '@styles/theme';

export function Routes() {
  const navigatorTheme = DefaultTheme;
  navigatorTheme.colors.background = theme.colors.gray900;

  return (
    <NavigationContainer>
      <PublicRoutes />
    </NavigationContainer>
  );
}
