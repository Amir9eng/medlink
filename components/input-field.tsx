import { View, Text, TextInput } from 'react-native';
import React from 'react';

export default function InputField({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  error,
}: {
  label: string;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  error?: string;
}) {
  return (
    <View className="mt-3">
      <Text className="py-2">{label}</Text>
      <TextInput
        placeholder={placeholder}
        className={`border-2 ${
          error ? 'border-red-500' : 'border-gray-300'
        } bg-white rounded-xl py-4 px-3`}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      {error ? <Text className="text-red-500">{error}</Text> : null}
    </View>
  );
}
