import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import color from '../../themes/colors';
import {weight} from '../../themes/fonts';

interface IButton {
  text?: string;
  onPress?: () => void;
}

const Button = ({text = '', onPress = () => {}}: IButton) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: color.border,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    margin: 5,
  },
  text: {
    color: color.black,
    fontWeight: weight.semi,
  },
});
