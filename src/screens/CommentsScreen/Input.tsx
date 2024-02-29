import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import color from '../../themes/colors';
import {weight, size} from '../../themes/fonts';

const Input = () => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = () => {
    console.warn(newComment);
    setNewComment('');
  };
  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        }}
        style={styles.image}
      />
      <TextInput
        placeholder="Post comment here ..."
        style={styles.input}
        multiline
        value={newComment}
        onChangeText={setNewComment}
      />
      <Text onPress={handleSubmit} style={styles.button}>
        Post
      </Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 5,
    borderTopWidth: 1,
    borderColor: color.border,
    alignItems: 'flex-end',
  },
  image: {width: 40, aspectRatio: 1, borderRadius: 30},
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: color.border,
    paddingHorizontal: 10,
    paddingVertical: 5,
    paddingRight: 50,
    margin: 5,
  },
  button: {
    position: 'absolute',
    right: 15,
    bottom: 20,
    fontSize: size.s,
    fontWeight: weight.full,
    color: color.primary,
  },
});
