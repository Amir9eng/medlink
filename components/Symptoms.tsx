import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import SymptomCard from './SymptomCard';
import { NavigationProps } from '@/utils/types';
import { useNavigation } from '@react-navigation/native';

const symptoms = [
  {
    id: 1,
    name: 'Blood pressure/Eje ruru',
    description: 'High or low blood pressure',
    image: require('../assets/blood.jpg'),
  },
  {
    id: 2,
    name: 'Diabetes/ito sugar',
    description: 'High blood sugar level',
    image: require('../assets/cholera.png'),
  },
  {
    id: 3,
    name: 'Typhoid/isan onigba-meji',
    description: 'Bacterial infection causing fever',
    image: require('../assets/tapeworm.png'),
  },
  {
    id: 4,
    name: 'Malaria/iba',
    description: 'Condition caused by plasmodium parasite',
    image: require('../assets/malaria.jpg'),
  },
  {
    id: 5,
    name: 'Arthitis/arun jejere',
    description: 'Joint inflammation',
    image: require('../assets/cholera.png'),
  },
  {
    id: 6,
    name: 'back ache/eyin riro',
    description: 'Pain in the back',
    image: require('../assets/headache.jpg'),
  },
];

export default function Symptoms() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<number[]>([]);
  const navigation = useNavigation<NavigationProps>();

  const handleSymptomSelect = (id: number) => {
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
        <View className="flex-row flex-wrap justify-between">
          {symptoms.map((symptom) => (
            <SymptomCard
              key={symptom.id}
              {...symptom}
              isSelected={selectedSymptoms.includes(symptom.id)}
              onSelect={handleSymptomSelect}
            />
          ))}
        </View>
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
