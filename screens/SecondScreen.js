import { Text, SafeAreaView, ImageBackground, View, Button, FlatList, KeyboardAvoidingView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { db, ref, onValue } from '../database/firebase';
import chatbotStyles from '../styles/chatbotStyles'
import { Ionicons } from '@expo/vector-icons';
import background from '../assets/background-1.jpg';
import axios from 'axios';


const PALM_API_KEY = 'AIzaSyB2Mp3wH33WtkYTXb_Bt85LSddGT_sJRMA';
const NLP_API_BASE_URL = 'http://172.20.30.159:3001/bot';

const SecondScreen = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [temp, setTemp] = useState(0);
  const [pHLevel, setpHLevel] = useState(0);
  const [waterLevel, setWaterLevel] = useState(0);
  const [todoData, setTodoData] = useState([]);
  
useEffect(() => {
  const starCountRef = ref(db, 'temperatureHistory/');
  const onData = (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const limitedEntries = Object.keys(data)
        .slice(0, 5)
        .map((key) => ({
          id: key,  
          ...data[key],
        }));
      console.log(limitedEntries);
      setTodoData(limitedEntries);
    } else {
      console.error('No data found in temperatureHistory node.');
    }
  };

  const onError = (error) => {
    console.error('Error fetching historical data:', error);
  };

  onValue(starCountRef, onData, { onlyOnce: true }, onError);
}, []);
  
  useEffect(() => {
    const data = ref(db);

    onValue(data, (snapshot) => {
  console.log(`Snapshot: `, snapshot.val());
  const { temp, pHLevel, waterLevel } = snapshot.val();
  setTemp(temp);
  setpHLevel(pHLevel);
  setWaterLevel(waterLevel);
});
  }, [db]);

     const generateText = async () => {
    if (inputText.trim() === '') {
      return;
    }
     if (inputText.toLowerCase().includes('forecast')) {
        try {
        const response = await axios.get('http://172.20.30.159:5000/forecast');

        if (response.status === 200 && response.data.forecast) {
            console.log('Received data:', response.data);  

            const { temperature, phlevel, waterlevel } = response.data.forecast;

            const newUserMessage = {
                id: messages.length + 1,
                message: inputText,
                sender: 'user',
                timestamp: new Date().getTime(),
            };

            const temperatureMessage = `Temperature: ${temperature.join(', ')}`;
            const phlevelMessage = `pH Level: ${phlevel.join(', ')}`;
            const waterlevelMessage = `Water Level: ${waterlevel.join(', ')}`;

            const newBotMessage = {
            id: messages.length + 2,
            content: `Forecasted values:\n
              ${temperatureMessage}\n
              ${phlevelMessage}\n
              ${waterlevelMessage}`,
            sender: 'bot',
            timestamp: new Date().getTime(),
};

            setMessages([...messages, newUserMessage, newBotMessage]);
            setInputText('');
        } else {
            console.error('Failed to fetch forecast values or the data is undefined.');
        }
    } catch (error) {
        console.error('An error occurred while fetching forecast values:', error);
    }

        return;
    }

     if (inputText.toLowerCase().includes('fish tank')) {
      try {
        const response = await axios.post(`${NLP_API_BASE_URL}/generateMessage`, {
          inputText,
        });

        if (response.status === 200) {
          const botResponse = response.data?.message;  

          const newUserMessage = {
            id: messages.length + 1,
            message: inputText,
            sender: 'user', 
            timestamp: new Date().getTime(),
          };

          const newBotMessage = {
            id: messages.length + 2,
            content: `${botResponse}`,
            sender: 'bot',
            timestamp: new Date().getTime(),
          };

          setMessages([...messages, newUserMessage, newBotMessage]);
          setInputText('');
        } else {
          console.error('Failed to fetch bot response.');
        }
      } catch (error) {
        console.error('An error occurred while fetching bot response:', error);
      }

      return;
    }

if (inputText.toLowerCase().includes('history')) {
    try {
        const response = await axios.post(`${NLP_API_BASE_URL}/generateMessage`, {
            inputText,

        });

        if (response.status === 200) {
            const botResponse = response.data?.message;  

            const newUserMessage = {
                id: messages.length + 1,
                message: inputText,
                sender: 'user',
                timestamp: new Date().getTime(),
            };

            const newBotMessage = {
                id: messages.length + 2,
                content: `${botResponse}`,
                sender: 'bot',
                timestamp: new Date().getTime(),
            };

            setMessages([...messages, newUserMessage, newBotMessage]);
            setInputText('');
        } else {
            console.error('Failed to fetch bot response.');
        }
    } catch (error) {
        console.error('An error occurred while fetching bot response:', error);
    }

    return;
}

   if (inputText.toLowerCase().includes('temperature')) {
      try {
        const response = await axios.post(`${NLP_API_BASE_URL}/generateMessage`, {
          inputText,
        });

        if (response.status === 200) {
          const botResponse = response.data?.message;  

          const newUserMessage = {
            id: messages.length + 1,
            message: inputText,
            sender: 'user',
            timestamp: new Date().getTime(),
          };

          const newBotMessage = {
            id: messages.length + 2,
            content: `${botResponse}`,
            sender: 'bot',
            timestamp: new Date().getTime(),
          };

          setMessages([...messages, newUserMessage, newBotMessage]);
          setInputText('');
        } else {
          console.error('Failed to fetch bot response.');
        }
      } catch (error) {
        console.error('An error occurred while fetching bot response:', error);
      }

      return;
    }

    if (inputText.toLowerCase().includes('ph level')) {
      try {
        const response = await axios.post(`${NLP_API_BASE_URL}/generateMessage`, {
          inputText,
        });

        if (response.status === 200) {
          const botResponse = response.data?.message;  

          const newUserMessage = {
            id: messages.length + 1,
            message: inputText,
            sender: 'user',
            timestamp: new Date().getTime(),
          };

          const newBotMessage = {
            id: messages.length + 2,
            content: `${botResponse}`,
            sender: 'bot',
            timestamp: new Date().getTime(),
          };

          setMessages([...messages, newUserMessage, newBotMessage]);
          setInputText('');
        } else {
          console.error('Failed to fetch bot response.');
        }
      } catch (error) {
        console.error('An error occurred while fetching bot response:', error);
      }

      return;
    }

    if (inputText.toLowerCase().includes('water level')) {
      try {
        const response = await axios.post(`${NLP_API_BASE_URL}/generateMessage`, {
          inputText,
        });

        if (response.status === 200) {
          const botResponse = response.data?.message;  

          const newUserMessage = {
            id: messages.length + 1,
            message: inputText,
            sender: 'user',
            timestamp: new Date().getTime(),
          };

          const newBotMessage = {
            id: messages.length + 2,
            content: `${botResponse}`,
            sender: 'bot',
            timestamp: new Date().getTime(),
          };

          setMessages([...messages, newUserMessage, newBotMessage]);
          setInputText('');

          
        } else {
          console.error('Failed to fetch bot response.');
        }
      } catch (error) {
        console.error('An error occurred while fetching bot response:', error);
      }

      return;
    }

    if (inputText.toLowerCase().includes('temperature alert')) {
      try {
        const response = await axios.post(`${NLP_API_BASE_URL}/generateMessage`, {
          inputText,
        });

        if (response.status === 200) {
          const botResponse = response.data?.message;  

          const newUserMessage = {
            id: messages.length + 1,
            message: inputText,
            sender: 'user',
            timestamp: new Date().getTime(),
          };

          const newBotMessage = {
            id: messages.length + 2,
            content: `${botResponse}`,
            sender: 'bot',
            timestamp: new Date().getTime(),
          };

          setMessages([...messages, newUserMessage, newBotMessage]);
          setInputText('');

          
        } else {
          console.error('Failed to fetch bot response.');
        }
      } catch (error) {
        console.error('An error occurred while fetching bot response:', error);
      }

      return;
    }
    
    if (inputText.toLowerCase().includes('ph level alert')) {
      try {
        const response = await axios.post(`${NLP_API_BASE_URL}/generateMessage`, {
          inputText,
        });

        if (response.status === 200) {
          const botResponse = response.data?.message;  

          const newUserMessage = {
            id: messages.length + 1,
            message: inputText,
            sender: 'user',
            timestamp: new Date().getTime(),
          };

          const newBotMessage = {
            id: messages.length + 2,
            content: `${botResponse}`,
            sender: 'bot',
            timestamp: new Date().getTime(),
          };

          setMessages([...messages, newUserMessage, newBotMessage]);
          setInputText('');

          
        } else {
          console.error('Failed to fetch bot response.');
        }
      } catch (error) {
        console.error('An error occurred while fetching bot response:', error);
      }

      return;
    }    

    if (inputText.toLowerCase().includes('water level alert')) {
      try {
        const response = await axios.post(`${NLP_API_BASE_URL}/generateMessage`, {
          inputText,
        });

        if (response.status === 200) {
          const botResponse = response.data?.message;  

          const newUserMessage = {
            id: messages.length + 1,
            message: inputText,
            sender: 'user',
            timestamp: new Date().getTime(),
          };

          const newBotMessage = {
            id: messages.length + 2,
            content: `${botResponse}`,
            sender: 'bot',
            timestamp: new Date().getTime(),
          };

          setMessages([...messages, newUserMessage, newBotMessage]);
          setInputText('');

          
        } else {
          console.error('Failed to fetch bot response.');
        }
      } catch (error) {
        console.error('An error occurred while fetching bot response:', error);
      }

      return;
    } 
     if (inputText.toLowerCase().includes('iAqua')) {
      try {
        const response = await axios.post(`${NLP_API_BASE_URL}/generateMessage`, {
          inputText,
        });

        if (response.status === 200) {
          const botResponse = response.data?.message;  

          const newUserMessage = {
            id: messages.length + 1,
            message: inputText,
            sender: 'user',
            timestamp: new Date().getTime(),
          };

          const newBotMessage = {
            id: messages.length + 2,
            content: `${botResponse}`,
            sender: 'bot',
            timestamp: new Date().getTime(),
          };

          setMessages([...messages, newUserMessage, newBotMessage]);
          setInputText('');

          
        } else {
          console.error('Failed to fetch bot response.');
        }
      } catch (error) {
        console.error('An error occurred while fetching bot response:', error);
      }

      return;
    }    

    setLoading(true);

    const apiUrl = 'https://generativelanguage.googleapis.com/v1beta3/models/chat-bison-001:generateMessage';

    const requestData = {
      prompt: {
        context: '',
        examples: [],
        messages: [{ content: inputText }],
      },
      temperature: 0.25,
      top_k: 40,
      top_p: 0.95,
      candidate_count: 1,
    };

    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await axios.post(`${apiUrl}?key=${PALM_API_KEY}`, requestData, {
        headers,
      });

      if (response.status === 200) {
        if (response.data && response.data.candidates && response.data.candidates.length > 0) {
          const botResponse = response.data.candidates[0].content;

          const newUserMessage = {
            id: messages.length + 1,
            text: inputText,
            sender: 'user',
            timestamp: new Date().getTime(),
          };
          const newBotMessage = {
            id: messages.length + 2,
            text: botResponse,
            sender: 'bot',
            timestamp: new Date().getTime(),
          };

          setMessages([...messages, newUserMessage, newBotMessage]);
          setInputText('');
        } else {
          console.error('Response structure is not as expected!');
        }
      } else {
        console.error('Google Cloud API response failed with status: ', response.status);
      }
    } catch (error) {
      console.error('An error occurred while making the Google Cloud API request: ', error);
    } finally {
      setLoading(false);
    }
  }; 

  return (
    <ImageBackground source={background} style={chatbotStyles.bg}>
      <SafeAreaView style={chatbotStyles.container}>
      <View style={chatbotStyles.firstLayer}>
          <Text style={chatbotStyles.Header}>Chatbot</Text>
        </View>
        <View style={chatbotStyles.sending}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                alignSelf: item.sender === 'user' ? 'flex-end' : 'flex-start',
                marginBottom: 12,
              }}
            >
              <View
                style={{
                  backgroundColor: item.sender === 'user' ? 'black' : 'white',
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: item.sender === 'user' ? 'white' : 'black' }}>
                  {item.message || item.content || item.text}
                </Text>
                <Text style={{ color: item.sender === 'user' ? 'white' : 'black', fontSize: 14, marginTop: 4 }}>
                  {new Date(item.timestamp).toLocaleString()}
                </Text>
              </View>
            </View>
          )}
        />
        {loading && <ActivityIndicator size="large" color="white" />}
        </View>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={chatbotStyles.secondLayer}>
          <TextInput
            placeholder="Start communicating..."
            value={inputText}
            onChangeText={(text) => setInputText(text)}
            style={chatbotStyles.textInput}
          />
          <TouchableOpacity onPress={generateText} style={chatbotStyles.sendButton}>
            <Ionicons name="send" size={24} color="white" />
          </TouchableOpacity>
          </KeyboardAvoidingView>
        

       <View style={chatbotStyles.screen}>
          <TouchableOpacity
            style={chatbotStyles.chatbotButton}
            onPress={() => navigation.navigate("Home")}>
            <Text style={chatbotStyles.buttonText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={chatbotStyles.historyButton}
            onPress={() => navigation.navigate("History")}>
            <Text style={chatbotStyles.buttonText}>Check History</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default SecondScreen;
