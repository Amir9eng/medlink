import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Home from './components/HomeScreen';
import Onboarding from './components/Onboarding';
import ResetPassword from './components/ResetPassword';
import Otp from './components/Otp';
import ChangePassword from './components/ChangePassword';
import Signup from './components/Signup';
import PersonalInfo from './components/PersonalInfo';
import Success from './components/Success';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Onboarding: undefined;
  ResetPassword: undefined;
  Otp: undefined;
  ChangePassword: undefined;
  Signup: undefined;
  PersonalInfo: undefined;
  Success: undefined;
  VerifyEmail: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
        initialRouteName="Onboarding"
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
        <Stack.Screen name="Success" component={Success} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
