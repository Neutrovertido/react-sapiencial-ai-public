import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, Alert, ScrollView, Appearance, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';  // Import AsyncStorage

import GoogleSignInButton from './GoogleSignInButton';
import Chats from './Chats';
import SignUp from './SignUp';
import ChatInterface from './ChatInterface';

import useDarkMode from './useDarkMode';
import { auth } from './firebase'; // Import Firebase auth
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase signInWithEmailAndPassword

import "./global.css";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Rowdies': require('./assets/fonts/Rowdies-Bold.ttf'),
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const isDarkMode = useDarkMode();

  useEffect(() => {
    // Check if credentials are saved in AsyncStorage when the app loads
    const checkCredentials = async () => {
      try {
        const savedEmail = await AsyncStorage.getItem('email');
        const savedPassword = await AsyncStorage.getItem('password');
        const savedRememberMe = await AsyncStorage.getItem('rememberMe') === 'true';

        if (savedEmail && savedPassword && savedRememberMe) {
          setEmail(savedEmail);
          setPassword(savedPassword);
          setRememberMe(savedRememberMe);
        }
      } catch (error) {
        console.error('Error loading saved credentials:', error);
      }
    };

    checkCredentials();
  }, []);

  const handleLogin = (userName) => {
    console.log(`Welcome ${userName}!`);
    navigation.navigate('Chats'); // Navigate to Chats screen
  };

  const handleEmailLogin = async () => {
    try {
      // Attempt to sign in with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log('User signed in:', user.email);
      if (rememberMe) {
        // Save credentials if Remember Me is true
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('password', password);
        await AsyncStorage.setItem('rememberMe', 'true');
      } else {
        // Clear credentials if Remember Me is false
        await AsyncStorage.removeItem('email');
        await AsyncStorage.removeItem('password');
        await AsyncStorage.setItem('rememberMe', 'false');
      }
      navigation.navigate('Chats'); // Navigate to Chats screen after successful login
    } catch (error) {
      // Handle errors (e.g., wrong password, invalid email)
      console.error(error.code, error.message);
      Alert.alert("Login Failed", error.message); // Show error message to the user
    }
  };

  const handleSignUp = () => {
    console.log('Navigating to Sign Up page');
    navigation.navigate('SignUp');
  };

  return (
    <View className={`flex-1 items-center justify-center ${isDarkMode ? 'bg-dark-gray' : 'bg-[#f7f3f7]'}`}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} translucent backgroundColor="transparent" />
      <Text className={`text-5xl mb-4 font-rowdies mt-16 ${isDarkMode ? 'text-white' : 'text-dark-gray'}`}>sapiencialAI</Text>
      <View className="max-lg:w-3/4 lg:w-1/2 h-[2px] bg-gray-400 mb-4" />
      <Text className={`${isDarkMode ? 'text-neutral-200' : 'text-black'} text-4xl font-roboto my-5 mb-8`}>Log In</Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        className="max-lg:w-3/4 lg:w-1/2 p-4 mb-4 bg-gray-100 border border-gray-300 rounded-md"
        autoComplete="email"
        textContentType="emailAddress"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        className="max-lg:w-3/4 lg:w-1/2 p-4 mb-4 bg-gray-100 border border-gray-300 rounded-md"
        autoComplete="password"
        textContentType="password"
      />

      <View className="flex-row items-center justify-between max-lg:w-3/4 lg:w-1/2 mb-4">
        <Text className={`${isDarkMode ? 'text-neutral-300' : 'text-gray-600'}`}>Remember Me</Text>
        <Switch
          value={rememberMe}
          onValueChange={setRememberMe} // Set rememberMe state
        />
      </View>

      <TouchableOpacity
        onPress={handleEmailLogin}
        className={`max-lg:w-3/4 lg:w-1/2 py-4 ${isDarkMode ? 'bg-orange-700' : 'bg-gray-600'} rounded-full my-4`}
      >
        <Text className="text-center text-white text-lg font-roboto">Log In</Text>
      </TouchableOpacity>

      <View className="max-lg:w-3/4 lg:w-1/2 h-[2px] bg-gray-400 my-10" />
      
      <View className="w-1/2 items-center mb-16">
        <GoogleSignInButton onLogin={handleLogin} />
      </View>

      <View className="absolute bottom-4 w-full flex-row justify-center items-center">
        <Text className={`text-sm ${isDarkMode ? 'text-neutral-400' : 'text-gray-600'} pt-8`}>
          Don't have an account?{' '}
        </Text>
        <TouchableOpacity onPress={handleSignUp} className="pt-8">
          <Text className="text-blue-600 text-sm">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function App() {
  const isDarkMode = useDarkMode();

  return (
    // Keep the View wrapper to avoid a flashing screen issue when navigating
    <View style={{ flex: 1, backgroundColor: isDarkMode ? 'black' : 'white' }}> 
      <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} translucent backgroundColor="transparent" />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen 
            name="Chats" 
            component={Chats} 
            options={{ 
              headerShown: false,
            }} 
          />
          <Stack.Screen 
            name="SignUp" 
            component={SignUp} 
            options={{ 
              title: 'Sign Up', 
              headerStyle: { backgroundColor: isDarkMode ? '#333333' : 'white' },
              headerTintColor: isDarkMode ? 'white' : 'black',
              headerTitleStyle: { fontWeight: 'bold' }
            }} 
          />
          <Stack.Screen
            name="ChatInterface"
            component={ChatInterface}
            options={({ route }) => ({ 
              title: route.params.name,
              headerStyle: { backgroundColor: isDarkMode ? '#333333' : 'white' },
              headerTintColor: isDarkMode ? 'white' : 'black',
              headerTitleStyle: { fontWeight: 'bold' }
            })} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
