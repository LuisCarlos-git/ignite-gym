import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { SignIn, SignUp } from '@screens';

type PublicRoutesProps = {
  'sign-in': undefined;
  'sign-up': undefined;
};

export type PublicNavigatorRoutesProps =
  NativeStackNavigationProp<PublicRoutesProps>;

const { Navigator, Screen } = createNativeStackNavigator<PublicRoutesProps>();

export function PublicRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="sign-in" component={SignIn} />
      <Screen name="sign-up" component={SignUp} />
    </Navigator>
  );
}
