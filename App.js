// App.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'HELLO ALBERT';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 200); // Adjust the interval for faster or slower typing effect

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{displayText}</Text>
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
    fontFamily: 'monospace', // Use monospace font for typewriter effect
  },
});

export default App;
// End of App.js