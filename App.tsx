import React from 'react';

import {StyleSheet, View} from 'react-native';
// import HomeScreen from './src/screens/HomeScreen/Homescreen';
// import CommentsScreen from './src/screens/CommentsScreen';
// import ProfileScreen from './src/screens/ProfileScreen';
// import EditProfileScreen from './src/screens/EditProfileScreen/EditProfileScreen';
import PostUploadScreen from './src/screens/PostUploadScreen';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <View style={styles.container}>
      <PostUploadScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
