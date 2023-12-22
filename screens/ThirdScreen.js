import React, { useEffect, useState } from 'react';
import { Text, View, ImageBackground, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import background from '../assets/background-1.jpg';
import historyStyles from '../styles/historyStyles';
import { ref, onValue, db } from '../database/firebase';

const ThirdScreen = ({ navigation }) => {
  const [temperatureLogs, setTemperatureLogs] = useState([]);

  useEffect(() => {
    const temperatureLogsRef = ref(db, 'temperatureHistory/');
    const onData = (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const logs = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setTemperatureLogs(logs);
      } else {
        console.error('No data found in temperatureHistory node.');
      }
    };  

    const onError = (error) => {
      console.error('Error fetching historical data:', error);
    };

    onValue(temperatureLogsRef, onData, { onlyOnce: true }, onError);
  }, [db]);

  const renderLogItem = ({ item }) => (
    <View style={historyStyles.logItem}>
      <Text style={historyStyles.logText}>{`Log ID: ${item.id}`}</Text>
      <Text style={historyStyles.logText}>{`Temperature: ${item.temperature || 'N/A'}°C`}</Text>
      <Text style={historyStyles.logText}>{`Water Level: ${item.waterlevel || 'N/A'}`}</Text>
      <Text style={historyStyles.logText}>{`pH Level: ${item.phlevel || 'N/A'}`}</Text>
      <Text style={historyStyles.logText}>{`Timestamp: ${new Date(item.timestamp).toLocaleString()}`}</Text>
    </View>
  );

  return (
    <ImageBackground source={background} style={historyStyles.bg}>
      <SafeAreaView style={historyStyles.container}>
      <View style={historyStyles.firstLayer}>
      <FlatList
          data={temperatureLogs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderLogItem}
        />
      </View>
        <View style={historyStyles.screen}>
          <TouchableOpacity
            style={historyStyles.chatbotButton}
            onPress={() => navigation.navigate("Details")}>
            <Text style={historyStyles.buttonText}>Ask Chatbot</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={historyStyles.historyButton}
            onPress={() => navigation.navigate("Home")}>
            <Text style={historyStyles.buttonText}>Home</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ThirdScreen;
