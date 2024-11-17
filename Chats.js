import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ChatItem = ({ name, message }) => (
  <View style={styles.chatItem}>
    <View style={styles.chatInfo}>
      <Image
        source={{ uri: 'https://placehold.co/50x50' }}
        style={styles.avatar}
      />
      <View>
        <Text style={styles.chatName}>{name}</Text>
        <Text style={styles.chatMessage}>{message}</Text>
      </View>
    </View>
    <TouchableOpacity>
      <FontAwesome name="ellipsis-v" size={18} color="#6b7280" />
    </TouchableOpacity>
  </View>
);

const Chats = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>My Chats</Text>
    </View>
    <ChatItem name="Abraham Lincoln" message="Give me six hours to chop down a tree and I will spend the first four sharpening the axe." />
    <ChatItem name="Napoleon Bonaparte" message="The battlefield is a scene of constant chaos. The winner will be the one who controls that chaos, both his own and the enemies." />
    <ChatItem name="Brad Pitt" message="I'm one of those people you hate because of genetics. It's the truth." />
    <ChatItem name="Nikola Tesla" message="I don't care that they stole my idea ... I care that they don't have any of their own" />
    <ChatItem name="Leonardo DaVinci" message="Art is never finished, only abandoned." />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#d1d5db',
    backgroundColor: '#ffffff',
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#d1d5db',
    width: '100%',
    backgroundColor: '#ffffff',
  },
  chatInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  chatName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  chatMessage: {
    color: '#6b7280',
  },
});

export default Chats;
