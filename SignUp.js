import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import { auth } from './firebase'; // Import Firebase auth
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import Firebase createUserWithEmailAndPassword

const SignUp = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Rowdies': require('./assets/fonts/Rowdies-Bold.ttf'),
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Successful sign-up, userCredential contains user info
      const user = userCredential.user;
      console.log('User signed up:', user.email);

      // Navigate to 'Chats' after successful sign-up
      navigation.navigate('Chats');
    } catch (error) {
      // Handle errors (e.g., weak password, invalid email)
      console.error(error.code, error.message);
      Alert.alert("Sign Up Failed", error.message); // Show error message to the user
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-[#f7f3f7]">
      <Text className="text-5xl mb-4 font-rowdies mt-8">sapiencialAI</Text>
      <View className="max-lg:w-3/4 lg:w-1/2 h-[2px] bg-gray-400 mb-4" />
      <Text className="text-4xl my-5 mb-8 font-roboto">Sign Up</Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        className="max-lg:w-3/4 lg:w-1/2 p-4 mb-4 bg-gray-100 border border-gray-300 rounded-md"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        className="max-lg:w-3/4 lg:w-1/2 p-4 mb-4 bg-gray-100 border border-gray-300 rounded-md"
      />

      <TouchableOpacity
        onPress={handleSignUp}
        className="max-lg:w-3/4 lg:w-1/2 py-4 bg-gray-600 rounded-full my-4 mb-8"
      >
        <Text className="text-center text-white text-lg font-roboto">Sign Up</Text>
      </TouchableOpacity>

    </View>
  );
};

export default SignUp;
