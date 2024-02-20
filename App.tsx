import React from 'react';

import FeedPost from './src/components/FeedPost/FeedPost';
import {ScrollView, StyleSheet} from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <FeedPost />
      <FeedPost />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
