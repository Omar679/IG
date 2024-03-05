import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IUser} from '../../types/models';
import {weight} from '../../themes/fonts';
import {useNavigation} from '@react-navigation/native';

interface IUserListItem {
  user: IUser;
}

const UserListItem = ({user}: IUserListItem) => {
  const navigation = useNavigation();
  const goToUserScreen = () => {
    navigation.navigate('UserProfile', {userId: user.id});
  };

  return (
    <Pressable onPress={goToUserScreen} style={styles.root}>
      <Image source={{uri: user.image}} style={styles.image} />
      <View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>{user.username}</Text>
      </View>
    </Pressable>
  );
};

export default UserListItem;

const styles = StyleSheet.create({
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
  },
  root: {flexDirection: 'row', alignItems: 'center', padding: 10},

  name: {fontWeight: weight.bold, marginBottom: 10},
  username: {},
});
