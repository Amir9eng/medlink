import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import React, { useState } from 'react';

import { NavigationProps } from '@/utils/types';
import { useNavigation } from '@react-navigation/native';
import InputField from './input-field';

export default function PersonalInfo() {
  const navigation = useNavigation<NavigationProps>();

  const [formData, setFormData] = useState({
    homeAddress: '',
    state: '',
    country: '',
    postcode: '',
    areaOfSpecialization: '',
    yearsOfExperience: '',
  });

  const [errors, setErrors] = useState({
    homeAddress: '',
    state: '',
    country: '',
    postcode: '',
    areaOfSpecialization: '',
    yearsOfExperience: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      homeAddress: '',
      state: '',
      country: '',
      postcode: '',
      areaOfSpecialization: '',
      yearsOfExperience: '',
    };

    if (formData.homeAddress.trim() === '') {
      newErrors.homeAddress = 'Home address is required';
      isValid = false;
    }

    if (formData.state.trim() === '') {
      newErrors.state = 'State is required';
      isValid = false;
    }

    if (formData.country.trim() === '') {
      newErrors.country = 'Country is required';
      isValid = false;
    }

    if (formData.postcode.trim() === '') {
      newErrors.postcode = 'Postcode is required';
      isValid = false;
    } else if (!/^\d{6}$/.test(formData.postcode)) {
      newErrors.postcode = 'Postcode must be 6 digits';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Please correct the errors in the form.');
    }
  };

  const handleInputChange =
    (field: keyof typeof formData) => (text: string) => {
      setFormData((prev) => ({ ...prev, [field]: text }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: '' }));
      }
    };

  return (
    <SafeAreaView className="flex-1 bg-gray-200">
      <View className="mt-1 bg-gray-200 py-3">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/arrow-left-black.png')}
            className="mt-5 ml-4"
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        className="flex-1 px-5"
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <Text className="text-2xl font-bold mt-5">Personal Information</Text>
        <Text className="pt-4">Enter your correct credentials</Text>

        <InputField
          label="Home Address"
          placeholder="Arafims 2 Hostel, SUB lane 2"
          value={formData.homeAddress}
          onChangeText={handleInputChange('homeAddress')}
          error={errors.homeAddress}
        />
        <InputField
          label="State"
          placeholder="Enter your state"
          value={formData.state}
          onChangeText={handleInputChange('state')}
          error={errors.state}
        />
        <InputField
          label="Country"
          placeholder="Nigeria"
          value={formData.country}
          onChangeText={handleInputChange('country')}
          error={errors.country}
        />
        <InputField
          label="Postcode"
          placeholder="234544"
          value={formData.postcode}
          onChangeText={handleInputChange('postcode')}
          error={errors.postcode}
        />

        <InputField
          label="Area of Specialization"
          placeholder="Enter your area of specialization"
          value={formData.areaOfSpecialization}
          onChangeText={handleInputChange('areaOfSpecialization')}
          error={errors.areaOfSpecialization}
        />

        <InputField
          label="Experience"
          placeholder="Enter your years of experience"
          value={formData.yearsOfExperience}
          onChangeText={handleInputChange('yearsOfExperience')}
          error={errors.yearsOfExperience}
        />

        <View className="mt-6 mb-4">
          <TouchableOpacity
            className="bg-green-500 py-4 rounded-3xl"
            onPress={handleSubmit}
          >
            <Text className="text-white text-center">Proceed</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
