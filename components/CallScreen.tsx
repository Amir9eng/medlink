import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@/utils/types';

export default function CallScreen() {
  const navigation = useNavigation<NavigationProps>();
  const [callDuration, setCallDuration] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCallDuration((prevDuration) => prevDuration + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  const handleEndCall = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-1 bg-gray-100 items-center justify-center">
      <View className="items-center mb-8">
        <Image
          source={require('../assets/doctor-avatar.png')}
          className="w-32 h-32 rounded-full mb-4"
        />
        <Text className="text-2xl font-bold mb-2">Dr. John Doe</Text>
        <Text className="text-lg text-gray-600">General Practitioner</Text>
      </View>

      <Text className="text-4xl font-bold mb-8">
        {formatTime(callDuration)}
      </Text>

      <View className="flex-row justify-around w-full px-8">
        <TouchableOpacity className="bg-gray-300 p-4 rounded-full">
          <Image
            source={require('../assets/mute-icon.png')}
            className="w-8 h-8"
          />
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-red-500 p-4 rounded-full"
          onPress={handleEndCall}
        >
          <Image
            source={require('../assets/end-call-icon.png')}
            className="w-8 h-8"
          />
        </TouchableOpacity>
        <TouchableOpacity className="bg-gray-300 p-4 rounded-full">
          <Image
            source={require('../assets/speaker-icon.png')}
            className="w-8 h-8"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
