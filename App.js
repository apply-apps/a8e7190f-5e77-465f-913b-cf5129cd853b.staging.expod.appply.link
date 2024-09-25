// App.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HELLO ALBERT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000', // Dark background
  },
  text: {
    color: '#FFFFFF', // White text
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default App;
// End of App.js