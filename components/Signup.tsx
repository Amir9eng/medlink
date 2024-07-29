import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';
import { NavigationProps } from '@/utils/types';
import { useNavigation } from '@react-navigation/native';
import auth from '../firebase.config';
import InputField from './input-field';
import Toast from 'react-native-toast-message';
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from 'firebase/auth';

export default function Signup() {
  const navigation = useNavigation<NavigationProps>();

  const [signupForm, setSignupForm] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
  });

  const handleSignUp = async () => {
    try {
      const signInMethods = await fetchSignInMethodsForEmail(
        auth,
        signupForm.email
      );

      if (signInMethods.length > 0) {
        alert(
          'An account with this email address already exists. Please use another email.'
        );
      } else {
        const response = await createUserWithEmailAndPassword(
          auth,
          signupForm.email,
          signupForm.password
        );
        navigation.navigate('PersonalInfo');
        console.log('response', response);
        Toast.show({
          type: 'success',
          text1: 'Your account has been created successfully',
        });
      }
    } catch (error: any) {
      console.error({ error: JSON.stringify(error, null, 2) });
      const errorMessage = error.code;
      console.log('errorMessage', errorMessage);
      Toast.show({
        type: 'error',
        text1: 'Fill in all fields',
      });
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setSignupForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-200">
      <View className="pt-10 bg-gray-200 py-3">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/arrow-left-black.png')}
            className="mt-10 ml-5"
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        className="flex-1 px-5"
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <Text className="text-2xl font-bold">Sign up</Text>
        <Text className="pt-4">Enter your correct credentials</Text>

        <InputField
          label="First Name"
          placeholder="Enter your First Name"
          value={signupForm.firstName}
          onChangeText={(text) => handleInputChange('firstName', text)}
        />
        <InputField
          label="Last Name"
          placeholder="Enter your Last Name"
          value={signupForm.lastName}
          onChangeText={(text) => handleInputChange('lastName', text)}
        />
        <InputField
          label="Email"
          placeholder="Enter your Email"
          value={signupForm.email}
          onChangeText={(text) => handleInputChange('email', text)}
        />
        <InputField
          label="Phone"
          placeholder="Enter your Phone Number"
          value={signupForm.phone}
          onChangeText={(text) => handleInputChange('phone', text)}
        />
        <InputField
          label="Password"
          placeholder="Enter your Password"
          value={signupForm.password}
          onChangeText={(text) => handleInputChange('password', text)}
          secureTextEntry
        />
        <View className="mt-5">
          <TouchableOpacity
            className="bg-green-500 py-4 rounded-3xl mx-4"
            onPress={handleSignUp}
          >
            <Text className="text-white text-center">Proceed</Text>
          </TouchableOpacity>
          <Text className="text-center text-[#8491A4] pt-2">
            Already have an account?
            <TouchableOpacity>
              <Text className="text-green-500"> Login</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
