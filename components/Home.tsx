import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@/utils/types';
import { useUser } from '@/entity/userEntity';
import { useSchedule } from '@/entity/scheduleEntity';
import { Audio } from 'expo-av';
import { clearSchedule } from '@/entity/scheduleEntity';

export default function Home() {
  const navigation = useNavigation<NavigationProps>();
  const { firstName, lastName } = useUser();
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const schedules = [{ date: '05/08/2024', time: '2:00pm' }];
  // const schedules = useSchedule();

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/sounds/symptoms.mp3')
    );
    setSound(sound);

    await sound.playAsync();
  };

  const handleAddSymptoms = async () => {
    if (!audioPlayed) {
      await playSound();
      setAudioPlayed(true);
    } else {
      navigation.navigate('Symptoms');
      setAudioPlayed(false);
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const handleAddSchedule = () => {
    navigation.navigate('Schedule');
  };

  const handleClearSchedule = () => {
    clearSchedule();
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="pt-12 flex-row px-5">
        <Image source={require('../assets/avatar.png')} />
        <View className="flex-1 ml-5">
          <Text className="text-gray-600">Welcome!</Text>
          <Text className="text-2xl font-semibold">
            {firstName ? firstName : 'Default'} {lastName ? lastName : 'User'}
          </Text>
        </View>
        <Image source={require('../assets/notice.png')} />
      </View>
      <ScrollView
        className="flex-1 px-5"
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-2xl font-bold mb-5 mt-10">Today's Schedule</Text>

        {schedules.map((schedule, index) => (
          <TouchableOpacity
            key={index}
            className="flex-row mt-5"
            onPress={() => navigation.navigate('VideoCallScreen')}
          >
            <View
              className={`bg-${
                index % 2 === 0 ? 'blue' : 'purple'
              }-500 py-10 px-5 rounded-xl flex-1`}
            >
              <Text className="text-white text-2xl font-semibold">
                Appointment
              </Text>
              <Text className="text-white text-xl">Click to join the call</Text>
              <Text className="text-white text-xl">{schedule.time}</Text>
              <Text className="text-white text-sm">{schedule.date}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <View className="flex-row mt-5">
          <View className="bg-purple-500 py-10 px-5 rounded-xl flex-1">
            <Text className="text-white text-xl">02:00 PM</Text>
            <Text className="text-white text-2xl font-semibold">Checkup</Text>
          </View>
        </View>
      </ScrollView>
      <View className="px-5 pb-5">
        <TouchableOpacity
          className="bg-purple-600 mt-4 py-4 px-6 rounded-xl shadow-md"
          onPress={handleAddSymptoms}
        >
          <View className="flex-row items-center justify-center">
            <Text className="text-white text-xl font-semibold mr-2">
              {audioPlayed ? 'Proceed to Add Symptoms' : 'Add Symptoms'}
            </Text>
            <Text className="text-white text-2xl">+</Text>
          </View>
        </TouchableOpacity>
        <View className="flex-row gap-x-2">
          <TouchableOpacity
            className="bg-green-600 mt-4 py-4 px-4 rounded-xl shadow-md"
            onPress={handleAddSchedule}
          >
            <View className="flex-row items-center justify-center">
              <Text className="text-white text-xl font-semibold mr-2">
                Add Schedule
              </Text>
              <Text className="text-white text-2xl">+</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-red-600 mt-4 py-4 px-4 rounded-xl shadow-md"
            onPress={handleClearSchedule}
          >
            <View className="flex-row items-center justify-center">
              <Text className="text-white text-xl font-semibold mr-2">
                Clear Schedule
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
