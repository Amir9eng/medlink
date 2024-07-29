import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { NavigationProps } from '@/utils/types';
import { useNavigation } from '@react-navigation/native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

export default function Otp() {
  const navigation = useNavigation<NavigationProps>();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

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
      <View className="pt-10 mx-10">
        <Text className="text-2xl font-bold">
          Enter the OTP sent to your mail
        </Text>
        <Text className="pt-4">
          Enter the verification code sent to Idrisabd******@gmail.com
        </Text>
        <View className="mt-10">
          <Text className="py-2">OTP</Text>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                key={index}
                onLayout={getCellOnLayoutHandler(index)}
                className={`w-12 h-12 border-2 ${
                  isFocused ? 'border-green-500' : 'border-gray-300'
                } rounded-lg justify-center items-center`}
              >
                <Text className="text-lg font-bold">
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
          <TouchableOpacity
            className="bg-green-500 py-4 rounded-3xl mt-16"
            onPress={() => navigation.navigate('ChangePassword')}
          >
            <Text className="text-white text-center">Set Pin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
