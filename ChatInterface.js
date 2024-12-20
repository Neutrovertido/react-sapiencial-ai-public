import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet, Appearance, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { sendChatRequest } from './openAIRequest';  // Import the sendChatRequest function
import useDarkMode from './useDarkMode';  // Import the custom hook

const avatar = require('./assets/user.png');

function Bubble({ text, imageUri, isSender, isDarkMode }) {
  return (
    <View style={[styles.bubbleContainer, isSender ? styles.justifyEnd : null]}>
      {!isSender && (
        <Image
          source={avatar}
          style={styles.avatar}
        />
      )}
      <View style={[
        styles.messageBubble,
        isDarkMode ? (isSender ? styles.darkSenderBubble : styles.darkReceiverBubble) : (isSender ? styles.senderBubble : styles.receiverBubble)
      ]}>
        <Text style={isDarkMode ? (isSender ? styles.darkSenderText : styles.darkReceiverText) : (isSender ? styles.senderText : styles.receiverText)}>
          {text}
        </Text>
      </View>
      {isSender && (
        <Image
          source={avatar}
          style={[styles.avatar, styles.senderAvatar]}
        />
      )}
    </View>
  );
}

function ChatInterface({ route }) {
  const [messages, setMessages] = useState([]);
  const [textInput, setTextInput] = useState('');
  const isDarkMode = useDarkMode();  // Use the custom hook

  useEffect(() => {
    // Set the system message when the component is mounted
    const systemMessage = `You are now embodying the persona of ${route.params.name}. Respond authentically, reflecting their unique thoughts, emotions, and mannerisms. Maintain the illusion of being them and avoid disclosing that you are an AI. Engage in conversation as if you are truly ${route.params.name}, providing insights and responses that align with their character.`;
    setMessages([{ role: 'system', content: systemMessage }]);
  }, [route.params.name]); // Depend on `name` to update the system message

  // Function to handle sending a message
  const handleSendMessage = async () => {
    if (textInput.trim() === '') return;

    // Add user message to state
    const newMessages = [...messages, { role: 'user', content: textInput }];
    setMessages(newMessages);
    setTextInput('');

    // Send request to OpenAI
    const openAIResponse = await sendChatRequest(newMessages);
    
    // Add assistant response to state
    const updatedMessages = [
      ...newMessages,
      { role: 'assistant', content: openAIResponse }
    ];
    setMessages(updatedMessages);
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} translucent backgroundColor="transparent" />
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome name="ellipsis-v" size={20} color={isDarkMode ? 'white' : 'gray'} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.messageList}>
        {messages.map((message, index) => (
          // Render all messages but exclude the system message from being displayed
          message.role !== 'system' && (
            <Bubble
              key={index}
              text={message.content}
              imageUri={"https://storage.googleapis.com/a1aa/image/YZ8hgZ5fvbXDE6PX3ejeJcNsOJUCnD66GptBkomKVCe1DTgPB.jpg"} // Use a default avatar
              isSender={message.role === 'user'}
              isDarkMode={isDarkMode}
            />
          )
        ))}
        <View className="py-8"></View>
      </ScrollView>
      <View style={[styles.footer, isDarkMode && styles.darkFooter]}>
        <TouchableOpacity style={[styles.iconButton, isDarkMode && styles.darkIconButton]}>
          <FontAwesome name="plus" size={20} color={isDarkMode ? 'white' : 'gray'} />
        </TouchableOpacity>
        <TextInput
          style={[styles.textInput, isDarkMode && styles.darkTextInput]}
          placeholder="Message ChatBot"
          placeholderTextColor={isDarkMode ? '#a2a2a2' : '#808080'}
          value={textInput}
          onChangeText={setTextInput}
        />
        <TouchableOpacity style={[styles.sendButton, isDarkMode && styles.darkSendButton]} onPress={handleSendMessage}>
          <FontAwesome name="paper-plane" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconButton, isDarkMode && styles.darkIconButton]}>
          <FontAwesome name="microphone" size={20} color={isDarkMode ? 'white' : 'gray'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: "white",
    borderRadius: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 16,
    borderBottomWidth: 0,
  },
  messageList: {
    padding: 16,
    flex: 1,
  },
  bubbleContainer: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  senderAvatar: {
    marginLeft: 8,
    marginRight: 0,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 10,
  },
  senderBubble: {
    backgroundColor: '#4a5568', // bg-gray-700
  },
  receiverBubble: {
    backgroundColor: '#edf2f7', // bg-gray-200
  },
  senderText: {
    color: 'white',
  },
  receiverText: {
    color: '#2d3748', // text-gray-800
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 0,
  },
  iconButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#edf2f7', // bg-gray-200
    marginRight: 8,
  },
  sendButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#4a5568', // bg-gray-700
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    padding: 8,
    borderWidth: 2,
    borderColor: '#cbd5e0', // border-gray-400
    borderRadius: 10,
    marginRight: 8,
  },
  // New styles for dark mode
  darkContainer: {
    backgroundColor: '#1a1a1a',
  },
  darkFooter: {
    backgroundColor: '#333333',
  },
  darkIconButton: {
    backgroundColor: '#1a1a1a', // bg-gray-700
  },
  darkSendButton: {
    backgroundColor: '#747687', // bg-gray-700
  },
  darkTextInput: {
    borderColor: '#4a5568',
    color: 'white',
  },
  darkSenderBubble: {
    backgroundColor: '#ab3015',
  },
  darkReceiverBubble: {
    backgroundColor: '#292a2e',
  },
  darkSenderText: {
    color: '#edf2f7',
  },
  darkReceiverText: {
    color: '#e2e8f0',
  },
});

export default ChatInterface;
