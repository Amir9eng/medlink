import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@/utils/types';

export default function Onboarding() {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View className="h-screen">
      <View className="pt-10 bg-green-500 py-3 pb-32">
        <Image
          source={require('../assets/arrow-left.png')}
          className="mt-10 ml-5"
        />
        <Image
          source={require('../assets/logo.png')}
          className="mx-auto mt-16"
        />
      </View>
      <View className="pt-28">
        <TouchableOpacity
          className="bg-green-500 mx-10 py-4 rounded-3xl"
          onPress={() => navigation.navigate('PatientSignup')}
        >
          <Text className="text-white text-center">Login as a Patient</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-green-500 mx-10 py-4 rounded-3xl mt-5"
          onPress={() => navigation.navigate('Login')}
        >
          <Text className="text-white text-center">Login as a Doctor</Text>
        </TouchableOpacity>

        <View className="flex-row items-center justify-center mt-4">
          <Text className="text-center text-[#8491A4]">
            Don’t have an account?
          </Text>
          <TouchableOpacity
            className="py-3 rounded-3xl"
            onPress={() => navigation.navigate('Signup')}
          >
            <Text className="text-green-500 text-center">Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
