import { Text, View, Button, Image, ImageBackground, TouchableOpacity, SafeAreaView,} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { db, ref, onValue } from '../database/firebase';
import background from '../assets/background-1.jpg';
import React, { useState, useEffect } from 'react';
import dataStyles from '../styles/dataStyles';

const HomeScreen = ({navigation}) => {
  const [temp, setTemp] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [pHLevel, setpHlevel] = useState(0);
  const [message, setMessage] = useState('');
  const [waterLevel, setWaterLevel] = useState(0);
  const [buttonState, setButtonState] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [pump, setPump] = useState(false);

  useEffect(() => {
    const data = ref(db);
    onValue(data, (snapshot) => {
      const { temp, pHLevel, waterLevel, isOn, buttonState, pump } = snapshot.val();
      setTemp(temp);
      setpHlevel(pHLevel);
      setWaterLevel(waterLevel);
      setIsOn(isOn);
      setButtonState(buttonState);
      setPump(pump);
    });
  }, [db]);

  const handleTimePickerConfirm = (selectedDate) => {
    setTimePickerVisible(false);
    const currentTime = new Date();

    if (selectedDate > currentTime) {
      const timeDifference = selectedDate - currentTime;
      setTimeout(() => {
        handleButtonPressed(true);
      }, timeDifference);
    }
  };

  const toggleSwitch2 = () => {
    const firebaseEndpoint = 'https://chatbot-b4381-default-rtdb.asia-southeast1.firebasedatabase.app';
    const buttonStatePath = 'pump';
    const updateUrl = `${firebaseEndpoint}/${buttonStatePath}.json`;

    fetch(updateUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(true),
    })
      .then((response) => response.json())
      .then(() => {
        alert('Water is Now Changing!');

        setTimeout(() => {
          fetch(updateUrl, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(false),
          })
            .then(() => {
              alert('Water is Done Changing!');
            })
            .catch((error) => {
              console.error('Error updating button state to false:', error);
            });
        }, 5000);
      })
      .catch((error) => {
        console.error('Error updating button state:', error);
      });
  };


  const toggleSwitch = () => {
    const firebaseEndpoint = 'https://chatbot-b4381-default-rtdb.asia-southeast1.firebasedatabase.app';
    const buttonStatePath = 'isOn';
    const updateUrl = `${firebaseEndpoint}/${buttonStatePath}.json`;

    fetch(updateUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(true),
    })
      .then((response) => response.json())
      .then(() => {
        alert('Water is Now Changing!');

        setTimeout(() => {
          fetch(updateUrl, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(false),
          })
            .then(() => {
              alert('Water is Done Changing!');
            })
            .catch((error) => {
              console.error('Error updating button state to false:', error);
            });
        }, 5000);
      })
      .catch((error) => {
        console.error('Error updating button state:', error);
      });
  };

  const handleButtonPressed = () => {
    const firebaseEndpoint = 'https://chatbot-b4381-default-rtdb.asia-southeast1.firebasedatabase.app';
    const buttonStatePath = 'buttonState';
    const updateUrl = `${firebaseEndpoint}/${buttonStatePath}.json`;

    fetch(updateUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(true),
    })
      .then((response) => response.json())
      .then(() => {
        alert('Fish is Now Feeding!');

        setTimeout(() => {
          fetch(updateUrl, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(false),
          })
            .then(() => {
              alert('Fish is Done Feeding!');
            })
            .catch((error) => {
              console.error('Error updating button state to false:', error);
            });
        }, 5000);
      })
      .catch((error) => {
        console.error('Error updating button state:', error);
      });
  };

  return (
    <ImageBackground source={background} style={dataStyles.bg}>
      <SafeAreaView style={dataStyles.container}>
      <View style={dataStyles.firstLayer}>
        <View style={dataStyles.tempWrapper}>
          <Text style={dataStyles.text}>{temp}°</Text>
        </View>
      </View>
      <View style={dataStyles.functionWrapper}> 
            <TouchableOpacity
              style={dataStyles.button}
              onPress={() => handleButtonPressed(true)}>
            <Image
              source={require('../assets/feed.png')}
              style={dataStyles.feedImage}/>
              {message !== '' && (
            <Text style={dataStyles.messageText}>{message}</Text>)}
            </TouchableOpacity>
            <TouchableOpacity
              style={dataStyles.button}
              onPress={() => setTimePickerVisible(true)}>
            <Image
              source={require('../assets/time.png')}
              style={dataStyles.feedImage}/>
            </TouchableOpacity>
              {message !== '' && (
            <Text style={dataStyles.messageText}>{message}</Text>)}
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleTimePickerConfirm}
              onCancel={() => setTimePickerVisible(false)}/>
      </View>
      <View style={dataStyles.switch}>
      <Text style={dataStyles.switchText}>Water Pump Out</Text>
      <TouchableOpacity
              style={[
              dataStyles.outer, isOn
              ? { justifyContent: 'flex-end', backgroundColor: 'green' }
              : { justifyContent: 'flex-start', backgroundColor: 'gray' },]}
              activeOpacity={1} onPress={toggleSwitch}>
            <View style={dataStyles.inner} />
          </TouchableOpacity>
          </View> 
          <View style={dataStyles.switch}>
          <Text style={dataStyles.switchText}>Water Pump In</Text>
      <TouchableOpacity
              style={[
              dataStyles.outer, pump
              ? { justifyContent: 'flex-end', backgroundColor: 'green' }
              : { justifyContent: 'flex-start', backgroundColor: 'gray' },]}
              activeOpacity={1} onPress={toggleSwitch2}>
            <View style={dataStyles.inner} />
          </TouchableOpacity>
          </View> 
        <View style={dataStyles.dataWrapper}>
            <View style={dataStyles.dataItem}>
              <Text style={dataStyles.dataText}>{pHLevel}</Text>
              <Text style={dataStyles.title}>pH Level</Text>
            </View>
            <View style={dataStyles.dataItem}>
              <Text style={dataStyles.dataText}>{`${waterLevel}%`}</Text>
              <Text style={dataStyles.title}>Water Level</Text>
            </View>
          </View>
        <View style={dataStyles.screen}>
          <TouchableOpacity
            style={dataStyles.chatbotButton}
            onPress={() => navigation.navigate("Details")}>
            <Text style={dataStyles.buttonText}>Ask Chatbot</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={dataStyles.historyButton}
            onPress={() => navigation.navigate("History")}>
            <Text style={dataStyles.buttonText}>Check History</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default HomeScreen;

