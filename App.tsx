import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import color from './src/themes/colors';
import {size} from './src/themes/fonts';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <AntDesign name="forward" size={size.md} color={color.primary} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
