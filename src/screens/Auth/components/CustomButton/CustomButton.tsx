import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import color from '../../../../themes/colors';

interface ICustomButton {
  onPress: () => void;
  text: string;
  bgColor?: string;
  fgColor?: string;
}

const CustomButton = ({onPress, text, bgColor, fgColor}: ICustomButton) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, bgColor ? {backgroundColor: bgColor} : {}]}>
      <Text style={[styles.text, fgColor ? {color: fgColor} : {}]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: color.primary,
  },

  container_SECONDARY: {
    borderColor: color.primary,
    borderWidth: 2,
  },

  container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_PRIMARY: {},

  text_SECONDARY: {
    color: color.primary,
  },

  text_TERTIARY: {
    color: color.grey,
  },
});

export default CustomButton;
