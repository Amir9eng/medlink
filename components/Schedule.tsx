import { NavigationProps } from '@/utils/types';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function Schedule() {
  const navigator = useNavigation<NavigationProps>();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const times = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
  ];

  return (
    <ScrollView className="flex-1 bg-gray-100">
      <View className="pt-12 px-6 pb-5">
        <Text className="text-3xl font-bold text-gray-800 mb-6">Schedule</Text>

        <View className="bg-white rounded-xl shadow-md p-4 mb-6">
          <Text className="text-xl font-semibold text-gray-700 mb-4">
            Select Date
          </Text>
          <Calendar
            onDayPress={(day: any) => setSelectedDate(day.dateString)}
            markedDates={{
              [selectedDate]: { selected: true, selectedColor: 'green' },
            }}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              dotColor: '#00adf5',
              selectedDotColor: '#ffffff',
              arrowColor: 'green',
              monthTextColor: 'blue',
              indicatorColor: 'blue',
              textDayFontWeight: '300',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '300',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
            }}
          />
        </View>

        <View className="bg-white rounded-xl shadow-md p-4 mb-6">
          <Text className="text-xl font-semibold text-gray-700 mb-4">
            Select Time
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {times.map((time) => (
              <TouchableOpacity
                key={time}
                className={`w-[48%] py-3 px-4 rounded-lg mb-4 ${
                  selectedTime === time ? 'bg-green-500' : 'bg-gray-200'
                }`}
                onPress={() => setSelectedTime(time)}
              >
                <Text
                  className={`text-center font-semibold ${
                    selectedTime === time ? 'text-white' : 'text-gray-700'
                  }`}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity
          className="bg-green-500 py-4 rounded-xl shadow-md"
          onPress={() => {
            // console.log('Scheduled for:', selectedDate, selectedTime);
            navigator.navigate('Home');
          }}
        >
          <Text className="text-white text-center font-bold text-lg">
            Schedule Appointment
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
