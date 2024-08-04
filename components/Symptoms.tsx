import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import SymptomCard from './SymptomCard';
import { NavigationProps } from '@/utils/types';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';

const symptoms = [
  {
    id: 1,
    name: 'Blood pressure/Eje ruru',
    description: 'High or low blood pressure',
    image: require('../assets/blood.jpg'),
    sound: require('../assets/sounds/blood.mp3'),
  },
  {
    id: 2,
    name: 'Diabetes/ito sugar',
    description: 'High blood sugar level',
    image: require('../assets/cholera.png'),
    sound: require('../assets/sounds/diabetes.mp3'),
  },
  {
    id: 3,
    name: 'Typhoid/isan onigba-meji',
    description: 'Bacterial infection causing fever',
    image: require('../assets/typhoid.jpg'),
    sound: require('../assets/sounds/typhoid.mp3'),
  },
  {
    id: 4,
    name: 'Malaria/iba',
    description: 'Condition caused by plasmodium parasite',
    image: require('../assets/malaria.jpg'),
    sound: require('../assets/sounds/iba.mp3'),
  },
  {
    id: 5,
    name: 'Arthitis/arun jejere',
    description: 'Joint inflammation',
    image: require('../assets/arthitis.jpg'),
    sound: require('../assets/sounds/arthitis.mp3'),
  },
  {
    id: 6,
    name: 'back ache/eyin riro',
    description: 'Pain in the back',
    image: require('../assets/backache.jpg'),
    sound: require('../assets/sounds/backache.mp3'),
  },
  {
    id: 7,
    name: 'stomach pain/inu riro',
    description: 'Pain in the stomach',
    image: require('../assets/stomach.jpg'),
    sound: require('../assets/sounds/stomach.mp3'),
  },
  {
    id: 8,
    name: 'headache/ori fifo',
    description: 'Pain in the head',
    image: require('../assets/headache.jpg'),
    sound: require('../assets/sounds/headache.mp3'),
  },
];

export default function Symptoms() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<number[]>([]);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playSound = async (soundFile: any) => {
    const { sound } = await Audio.Sound.createAsync(soundFile);
    setSound(sound);

    sound.playAsync();
  };

  const handleSymptomSelect = (id: number) => {
    const selectedSymptom = symptoms.find((symptom) => symptom.id === id);
    if (selectedSymptom) {
      playSound(selectedSymptom.sound);
    }
    setSelectedSymptoms((prev) =>
      prev.includes(id)
        ? prev.filter((symptomId) => symptomId !== id)
        : [...prev, id]
    );
  };

  const handleNext = () => {
    console.log('Selected symptoms:', selectedSymptoms);
    navigation.navigate('Schedule');
  };

  return (
    <View className="flex-1 bg-gray-100 px-6 pt-16">
      <Text className="text-3xl font-bold text-gray-800 mb-6">
        Disease Symptoms
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <TouchableOpacity className="flex-row flex-wrap justify-between">
          {symptoms.map((symptom) => (
            <SymptomCard
              key={symptom.id}
              {...symptom}
              isSelected={selectedSymptoms.includes(symptom.id)}
              onSelect={handleSymptomSelect}
            />
          ))}
        </TouchableOpacity>
      </ScrollView>
      <View className="absolute bottom-6 left-6 right-6">
        <TouchableOpacity
          className={`py-4 rounded-xl ${
            selectedSymptoms.length > 0 ? 'bg-blue-500' : 'bg-gray-300'
          }`}
          disabled={selectedSymptoms.length === 0}
          onPress={handleNext}
        >
          <Text className="text-white text-center font-bold text-lg">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
