import { NavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  ResetPassword: undefined;
  Otp: undefined;
  ChangePassword: undefined;
  Signup: undefined;
  PersonalInfo: undefined;
  Success: undefined;
  VerifyEmail: undefined;
  Symptoms: undefined;
  Schedule: undefined;
  PatientSignup: undefined;
};

export type NavigationProps = NavigationProp<RootStackParamList>;
