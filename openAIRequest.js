import axios from 'axios';

const openaiAPIKey = 'OPENAI_API_KEY'; // Replace with your actual API key

// Function to send a request to OpenAI API with conversation context
export const sendChatRequest = async (messages, model = 'gpt-3.5-turbo', maxTokens = 200, temperature = 0.8) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: model,
        messages: messages,
        max_tokens: maxTokens,
        temperature: temperature,
      },
      {
        headers: {
          'Authorization': `Bearer ${openaiAPIKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // Returning the assistant's response
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error making request to OpenAI:", error);
    return 'Sorry, something went wrong.';
  }
};
