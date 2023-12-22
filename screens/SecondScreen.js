import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'
import chatbotStyles from '../styles/chatbotStyles'

const SecondScreen = ({navigation}) => {
  return (
    <View style={chatbotStyles.container}>
      <Text>Second Screen</Text>
      <Button
       title="Home"
       onPress={() => navigation.navigate("Home")}>
      </Button>
    </View>
  )
}

export default SecondScreen;
