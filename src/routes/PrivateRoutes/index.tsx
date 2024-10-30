import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';

import { Exercise, History, Home, Profile } from '@screens';

import HomeIcon from '@assets/home.svg';
import HistoryIcon from '@assets/history.svg';
import ProfileIcon from '@assets/profile.svg';
import { theme } from '@styles/theme';
import { Platform } from 'react-native';

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
  const iconSize = 24;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.green500,
        tabBarInactiveTintColor: theme.colors.gray200,
        tabBarStyle: {
          backgroundColor: theme.colors.gray600,
          borderTopWidth: 0,
          height: Platform.OS === 'ios' ? 96 : 70,
          paddingBottom: 10,
          paddingTop: 10,
          paddingRight: 10,
          paddingLeft: 10,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeIcon fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <HistoryIcon fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileIcon fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="exercise"
        component={Exercise}
        options={{
          tabBarButton: (props) => {
            return null;
          },
        }}
      />
    </Navigator>
  );
}
