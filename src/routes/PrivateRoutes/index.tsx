import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';

import { Exercise, History, Home, Profile, SignIn, SignUp } from '@screens';

type PrivateRoutesProps = {
  home: undefined;
  profile: undefined;
  exercise: undefined;
  history: undefined;
};

export type PrivateNavigatorRoutesProps =
  BottomTabNavigationProp<PrivateRoutesProps>;

const { Navigator, Screen } = createBottomTabNavigator<PrivateRoutesProps>();

export function PrivateRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="history" component={History} />
      <Screen name="profile" component={Profile} />
      <Screen name="exercise" component={Exercise} />
    </Navigator>
  );
}
