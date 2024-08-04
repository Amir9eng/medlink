import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@/utils/types';

export default function VideoCallScreen() {
  const navigation = useNavigation<NavigationProps>();
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  const handleEndCall = () => {
    navigation.navigate('Home');
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleVideo = () => {
    setIsVideoOff(!isVideoOff);
  };

  const switchCamera = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Text style={styles.callingText}>Calling Doctor...</Text>
      </View>
      <View style={styles.controlsContainer}>
        <TouchableOpacity style={styles.controlButton} onPress={toggleMute}>
          <Ionicons
            name={isMuted ? 'mic-off' : 'mic'}
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton} onPress={toggleVideo}>
          <Ionicons
            name={isVideoOff ? 'videocam-off' : 'videocam'}
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton} onPress={switchCamera}>
          <Ionicons name="camera-reverse" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.controlButton, styles.endCallButton]}
          onPress={handleEndCall}
        >
          <Ionicons name="call" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  callingText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  controlButton: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 30,
  },
  endCallButton: {
    backgroundColor: 'red',
  },
});