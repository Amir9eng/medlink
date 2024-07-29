import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

export default function SymptomCard({
  id,
  name,
  description,
  image,
  isSelected,
  onSelect,
}: {
  id: number;
  name: string;
  description: string;
  image: any;
  isSelected: boolean;
  onSelect: (id: number) => void;
}) {
  return (
    <TouchableOpacity
      className={`bg-white rounded-xl shadow-md p-4 mb-4 w-[48%] ${
        isSelected ? 'border-2 border-blue-500' : ''
      }`}
      onPress={() => onSelect(id)}
    >
      <Image
        source={image}
        className="w-full h-32 rounded-lg mb-3"
        resizeMode="cover"
      />
      <Text className="text-lg font-bold text-gray-800 mb-1">{name}</Text>
      <Text className="text-sm text-gray-600">{description}</Text>
    </TouchableOpacity>
  );
}
