import React from 'react';

import {StyleSheet, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/Homescreen';

const App = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
