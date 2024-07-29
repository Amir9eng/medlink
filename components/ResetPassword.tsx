import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@/utils/types';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '@/firebase.config';

export default function ResetPassword() {
  const navigation = useNavigation<NavigationProps>();
  const [forgotForm, setForgotForm] = useState({
    email: '',
  });

  const handleForgotPassword = () => {
    if (!forgotForm.email) {
      alert('Please enter your email address.');
      return;
    }

    sendPasswordResetEmail(auth, forgotForm.email)
      .then(() => {
        navigation.navigate('Otp');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View className="h-screen">
      <View className="pt-10 bg-gray-200 py-3">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/arrow-left-black.png')}
            className="mt-10 ml-5"
          />
        </TouchableOpacity>
      </View>
      <View className="pt-5 mx-5">
        <Text className="text-2xl font-bold">Reset Password</Text>
        <Text className="pt-4">
          Enter the email associated with your account and we’ll send an OTP to
          your email
        </Text>
        <View className=" mt-10">
          <Text className="py-2">Email</Text>
          <TextInput
            placeholder="Enter your Email"
            value={forgotForm.email}
            onChangeText={(text) =>
              setForgotForm({ ...forgotForm, email: text })
            }
            className="border-2 border-gray-200 rounded-xl py-4 px-3"
          />
          <TouchableOpacity
            className="bg-green-500 py-4 rounded-3xl mt-5"
            onPress={handleForgotPassword}
          >
            <Text className="text-white text-center">Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
