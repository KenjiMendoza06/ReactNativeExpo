import { StyleSheet } from 'react-native';

const dataStyles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
  },

  container: {
    flex: 1,
  },

  firstLayer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

    },

  tempWrapper: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',


},

  text: {
    fontSize: 100,
    fontWeight: '200',
    color: 'white',
    textAlign: 'center',
    marginLeft: 30,
    
  },

  functionWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    
  },

  switch: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'rgba(3, 3, 3, 0.7)',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '70%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },

  switchText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    paddingBottom: 10,

  },

  inner: {
    width: 26,
    height: 26,
    borderRadius: 15,
    backgroundColor: 'white',
    elevation: 8,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },

  outer: {
    width: 60,
    height: 30,
    backgroundColor: 'gray',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 2,
    marginLeft: 105,
  },

  messageText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
    paddingLeft: 10,
  },

  button: {
    backgroundColor: 'rgba(3, 3, 3, 0.7)',
    borderRadius: 100,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 10,
    marginRight: 20,
    marginLeft: 20,
  },

  feedImage: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },

   dataWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'rgba(3, 3, 3, 0.7)', 
    marginTop: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  dataItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

   dataText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Helvetica',
  },

  title: {
    fontSize: 16,
    color: 'white',
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
    backgroundColor: 'rgba(3, 3, 3, 0.7)', // Adjust the opacity value as needed
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
  
});

export default dataStyles;
