import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

import GoogleSignInButton from './GoogleSignInButton';
import Chats from './Chats';

import "./global.css"

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Rowdies': require('./assets/fonts/Rowdies-Bold.ttf'),
  });

  const handleLogin = (userName) => {
    console.log(`Welcome ${userName}!`);
    navigation.navigate('Chats'); // Navigate to Chats screen
  };

  return (
    <View className="flex-1 items-center justify-center bg-[#f7f3f7]">
      <Text className="text-5xl font-bold mb-4 font-rowdies">sapiencialAI</Text>
      <View className="w-1/2 h-[2px] bg-gray-400 mb-4" />
      <Text className="text-2xl mb-6 font-roboto">Log In</Text>
      <GoogleSignInButton onLogin={handleLogin} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Chats" component={Chats} options={{ title: 'My Chats' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
