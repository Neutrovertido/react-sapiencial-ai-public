import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function ChatItem({ name, message, avatar }) {
  const navigation = useNavigation(); // Access navigation here

  const openChatInterface = () => {
    // Navigate to ChatInterface and pass necessary data
    navigation.navigate('ChatInterface', { name, avatar });
  };

  return (
    <View className="flex-col p-4">
      <TouchableOpacity onPress={openChatInterface}>
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-start flex-1">
            <Image source={{ uri: avatar }} className="w-12 h-12 rounded-full mr-4" />
            <View className="flex-1">
              <Text className="font-bold text-lg">{name}</Text>
              <Text className="text-gray-600 flex-shrink">{message}</Text>
            </View>
          </View>
          <TouchableOpacity>
            <FontAwesome name="ellipsis-v" size={20} color="gray" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function MyChats() {
  return (
    <View className="w-full h-full bg-white shadow-lg rounded-lg pt-16 sm:pt-0">
      <View className="border-b border-gray-300 p-4 flex-row justify-between items-center">
        <Text className="text-xl font-bold">My Chats</Text>
        <TouchableOpacity>
          <FontAwesome name="ellipsis-v" size={20} color="gray" />
        </TouchableOpacity>
      </View>
      <ScrollView className="bg-white">
        <View className="divide-y divide-gray-300">
          <ChatItem
            name="Abraham Lincoln"
            message="Give me six hours to chop down a tree and I will spend the first four sharpening the axe."
            avatar="https://storage.googleapis.com/a1aa/image/mpilXSOA0pY7Fth4PnwNFe2aM1whP9i5xOfcaoKL2k5cu63TA.jpg"
          />
          <ChatItem
            name="Napoleon Bonaparte"
            message="The battlefield is a scene of constant chaos. The winner will be the one who controls that chaos, both his own and the enemies."
            avatar="https://storage.googleapis.com/a1aa/image/oR6uMXP8HeVYcSbgtRlRrc8yHdUlkxnpjZwqYdvoe8ewc1vnA.jpg"
          />
          <ChatItem
            name="Brad Pitt"
            message="I'm one of those people you hate because of genetics. It's the truth."
            avatar="https://storage.googleapis.com/a1aa/image/pVJ1xRM0XiKFDBIOfEvmTv6mctFpc3zVZchVuJn2AvjMX97JA.jpg"
          />
          <ChatItem
            name="Nikola Tesla"
            message="I don't care that they stole my idea ... I care that they don't have any of their own"
            avatar="https://storage.googleapis.com/a1aa/image/Jkt07efCGCkiYkMygq6ezQ9RJm7dETIddjsKOs6FyAj2c1vnA.jpg"
          />
          <ChatItem
            name="Leonardo DaVinci"
            message="Art is never finished, only abandoned."
            avatar="https://storage.googleapis.com/a1aa/image/fHSmogD5EE0vaiekRC64NGp6DtnUFIlsXjOPG89Z3ydPu63TA.jpg"
          />
          <ChatItem
            name="Albert Einstein"
            message="Life is like riding a bicycle. To keep your balance, you must keep moving."
            avatar="https://storage.googleapis.com/a1aa/image/Dem9rUaCdBVKTyTpHT4Q7gYTmK5XVZZN76fcK8cN37PQu63TA.jpg"
          />
          <ChatItem
            name="Marie Curie"
            message="Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less."
            avatar="https://storage.googleapis.com/a1aa/image/fAfQvj7fgYSplJuDRNFfz43PFQCSeh2QjfxyPcaspvkkkre7JA.jpg"
          />
          <ChatItem
            name="Winston Churchill"
            message="Success is not final, failure is not fatal: It is the courage to continue that counts."
            avatar="https://storage.googleapis.com/a1aa/image/WpK03g1VI9agCFii3c9VSe4ya8xLBmlV60EK0lrkwH8LX97JA.jpg"
          />
          <ChatItem
            name="Mahatma Gandhi"
            message="Be the change that you wish to see in the world."
            avatar="https://storage.googleapis.com/a1aa/image/7l8gWLe0XCSJOyM0h1Cyy8Sawo17GaffGHMSyYgL1kjmc1vnA.jpg"
          />
          <ChatItem
            name="Martin Luther King Jr."
            message="I have a dream that one day this nation will rise up and live out the true meaning of its creed: 'We hold these truths to be self-evident, that all men are created equal.'"
            avatar="https://storage.googleapis.com/a1aa/image/lvOpU9KVB27ANl95tFBKXk5LacUwgjnoyGoFpqHBMyClre7JA.jpg"
          />
          <ChatItem
            name="Steve Jobs"
            message="Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."
            avatar="https://storage.googleapis.com/a1aa/image/9eebdsCjMoiaE0xbs766RhDCj3t87hxnnS1zzLsUdOgdu63TA.jpg"
          />
          <ChatItem
            name="Elon Musk"
            message="When something is important enough, you do it even if the odds are not in your favor."
            avatar="https://storage.googleapis.com/a1aa/image/sCtdf6UZklWf408LsjPeGv6ycdyNxvCEr6eLOnOLnw5b5qfeE.jpg"
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default MyChats;
