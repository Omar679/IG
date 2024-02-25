import React from 'react';

import {StyleSheet, View} from 'react-native';
// import HomeScreen from './src/screens/HomeScreen/Homescreen';
import CommentsScreen from './src/screens/CommentsScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <CommentsScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
