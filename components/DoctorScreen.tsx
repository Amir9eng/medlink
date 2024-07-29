import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@/utils/types';

export default function DoctorScreen() {
  const navigation = useNavigation<NavigationProps>();

  const handleAddSymptoms = () => {
    navigation.navigate('Symptoms');
  };

  return (
    <View className="flex-1 bg-gray-100">
      <View className="pt-16 flex-row px-5">
        <Image source={require('../assets/avatar.png')} />
        <View className="flex-1 ml-5">
          <Text className="text-gray-600">Welcome!</Text>
          <Text className="text-2xl font-semibold">Wahab Babatunde</Text>
        </View>
        <Image source={require('../assets/notice.png')} />
      </View>
      <View className="pt-10 px-5">
        <Text className="text-2xl font-bold mb-5">Today's Schedule</Text>

        <View className="flex-row mt-5">
          <View className="bg-blue-500 py-10 px-5 rounded-xl flex-1 mr-5">
            <Text className="text-white text-xl">12:00 PM</Text>
            <Text className="text-white text-2xl font-semibold">
              Consultation
            </Text>
          </View>
        </View>
        <View className="flex-row mt-5">
          <View className="bg-purple-500 py-10 px-5 rounded-xl flex-1 mr-5">
            <Text className="text-white text-xl">02:00 PM</Text>
            <Text className="text-white text-2xl font-semibold">Checkup</Text>
          </View>
        </View>
        <TouchableOpacity
          className="bg-purple-600 mt-8 py-4 px-6 rounded-xl shadow-md mx-auto"
          onPress={handleAddSymptoms}
        >
          <View className="flex-row items-center justify-center">
            <Text className="text-white text-xl font-semibold mr-2">
              Add Symptoms
            </Text>
            <Text className="text-white text-2xl">+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
