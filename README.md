# 📣 React Sapiencial AI Public

Public mirror of a ChatGPT API chatbot capable of role-playing as any character. Built using React Native and Expo.

## 📸 Screenshots

### 💡 Concept GUI
![Concept GUI](img/concept.png)

### 📱 Actual GUI
![Actual GUI](img/current.png)

## 📚 Table of Contents

- [Screenshots](#screenshots)
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Introduction

The **React Sapiencial AI Public** project is a versatile chatbot application using the ChatGPT API to simulate conversations and role-play with characters. Designed to run on mobile devices, this app leverages React Native for a seamless experience across both iOS and Android platforms, utilizing Expo for easy development and deployment.

**Note**: Support for web is secondary, the main focus is Android & iOS. Feel free to [improve the code](#contributing) for any of the platforms as you see fit.

## ✨ Features

- 🎭 Engage in AI-driven role-playing scenarios.
- 🛠 Customize chatbot personalities to suit various characters. (WIP)
- 💾 Store conversations via Firebase login. (WIP)
- 📱 Cross-platform compatibility with iOS and Android devices.
- 🖥 Simple and intuitive user interface.
- 🌕 Dark mode support based on local system settings.

## ⚙️ Installation

To get started with the project locally, follow these steps:

1. **📥 Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/react-sapiencial-ai-public.git
   cd react-sapiencial-ai-public
   ```

2. **📦 Install dependencies:**

   Ensure you have Node.js and npm installed. Then, run:

   ```bash
   npm install
   ```

3. **🔑 API Keys:**

    Set your API Keys for Firebase and OpenAI in `firebase.js` and `openAIRequest.js` respectively.

    `firebase.js`:
    ```js
        // Replace with your Firebase config from Firebase Console
        const firebaseConfig = {
            apiKey: "<YOUR_API_KEY>",
            authDomain: "<YOUR_AUTH_DOMAIN>",
            projectId: "<YOUR_PROJECT_ID>",
            storageBucket: "<YOUR_STORAGE_BUCKET>",
            messagingSenderId: "<YOUR_MESSAGING_SENDER_ID>",
            appId: "<YOUR_APP_ID>",
            measurementId: "<YOUR_MEASUREMENT_ID>"
        };
    ```

    `openAIRequest.js`:
    ```js
     // Replace with your actual OpenAI API key
        const openaiAPIKey = 'OPENAI_API_KEY';
    ```

4. **🚀 Run the app:**

   Start the Expo development server:

   ```bash
   npm start
   ```

5. **📲 Open on your device:**

   Use the Expo Go app on your smartphone to scan the QR code or run on an emulator through the provided options after starting the server.

## 🕹 Usage

To use the chatbot, simply navigate through the app's user interface:
- Select a character for the chatbot to emulate.
- Begin conversing by typing messages in the chat interface.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project, please fork the repository and submit a pull request with your changes.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# ⚠️ Disclaimer

This repository is a public mirror of a private repository with some modifications, mainly the removal of sensitive information and local testing related details.

**🤝 Contributions are welcome, however.**