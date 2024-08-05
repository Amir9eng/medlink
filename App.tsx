import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Home from './components/Home';
import Onboarding from './components/Onboarding';
import ResetPassword from './components/ResetPassword';
import Otp from './components/Otp';
import ChangePassword from './components/ChangePassword';
import Signup from './components/Signup';
import PersonalInfo from './components/PersonalInfo';
import Success from './components/Success';
import Toast from 'react-native-toast-message';
import VerifyEmail from './components/VerifyEmail';
import Symptoms from './components/Symptoms';
import Schedule from './components/Schedule';
import CallScreen from './components/CallScreen';
import PatientSignup from './components/PatientSignup';
import VideoCallScreen from './components/VideoCallScreen';
import {
  // StreamCall,
  StreamVideo,
  StreamVideoClient,
  User,
} from '@stream-io/video-react-native-sdk';

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
  Symptoms: undefined;
  Schedule: undefined;
  CallScreen: undefined;
  PatientSignup: undefined;
  VideoCallScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
// q9r9sz27vd6q
// tvgapwxnczbuv9yf96dk5yrwgwf67jwjusv5hjp6h3a4vxh6njv7cqt4rr9dscpr
const apiKey = 'q9r9sz27vd6q';
const userId = 'olukade';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoib2x1a2FkZSJ9.cOXot3n67A99FlnU5NF3oUQpxojqusdNkDwU2atG6SU';
// const callId = 'my-call-id';
const user: User = { id: userId };

const client = new StreamVideoClient({ apiKey, user, token });
// const call = client.call('default', callId);
// call.join({ create: true });

export default function App() {
  return (
    <NavigationContainer>
      <StreamVideo client={client}>
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
          <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
          <Stack.Screen name="Symptoms" component={Symptoms} />
          <Stack.Screen name="Schedule" component={Schedule} />
          <Stack.Screen name="CallScreen" component={CallScreen} />
          <Stack.Screen name="VideoCallScreen" component={VideoCallScreen} />
          <Stack.Screen name="PatientSignup" component={PatientSignup} />
        </Stack.Navigator>
        <Toast />
      </StreamVideo>
    </NavigationContainer>
  );
}
