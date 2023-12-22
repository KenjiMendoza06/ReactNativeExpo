import { StyleSheet } from 'react-native'

const historyStyles = StyleSheet.create({
    bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
  },

  container: {
    flex: 1,
  },

 screen: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    width: '80%',
  },

  chatbotButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(3, 3, 3, 0.7)',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 10,
    height: 50, 
  },

  historyButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(3, 3, 3, 0.7)',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'gray',
    marginLeft: 10,
    height: 50, 
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },

  firstLayer: {
    flex: 8,
    
  },

   logItem: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },

  logText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
})
export default historyStyles;
