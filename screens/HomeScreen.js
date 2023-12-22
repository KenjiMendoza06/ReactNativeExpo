import { Text, View, Button} from 'react-native'
import React from 'react'
import dataStyles from '../styles/dataStyles'

const HomeScreen = ({navigation}) => {
  return (
    <View style={dataStyles.container}>
      <Text>Home Screen</Text>
      <Button 
      title="Details"
      onPress={() => navigation.navigate("Details")}>
      </Button>
    </View>
  )
}

export default HomeScreen;

