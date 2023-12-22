import { StyleSheet } from 'react-native'

const chatbotStyles = StyleSheet.create({
    bg: {
        flex: 1,
        resizeMode: "conver",
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(3, 3, 3, 0.7)',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'gray',
        marginLeft: 10,
       
  },

    Header: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
       
    },

    sending: {
        flex: 6,
        justifyContent: 'center',
          
    },

    secondLayer: {
        backgroundColor: 'lightgrey',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        width: '100%',
        alignSelf: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    textInput: {
        fontSize: 16,
        color: 'black',
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
    },

    sendButton: {
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#030303',
    },
})
export default chatbotStyles;