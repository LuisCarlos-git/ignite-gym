import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { SignIn, SignUp } from '@screens';
import { Text, View } from 'react-native';

type PrivateRoutesProps = {
  private: undefined;
};

export type PrivateNavigatorRoutesProps =
  NativeStackNavigationProp<PrivateRoutesProps>;

const { Navigator, Screen } = createNativeStackNavigator<PrivateRoutesProps>();

export function PrivateRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="private"
        component={() => (
          <View>
            <Text>private route</Text>
          </View>
        )}
      />
    </Navigator>
  );
}
