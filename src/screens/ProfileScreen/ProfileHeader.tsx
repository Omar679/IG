import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import user from '../../assets/data/user.json';
import {size, weight} from '../../themes/fonts';
import color from '../../themes/colors';
import Button from '../../components/Button/Button';
// import FeedPost from '../../components/FeedPost';

const ProfileHeader = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        <Image source={{uri: user.image}} style={styles.image} />

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Followers </Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Following</Text>
        </View>
      </View>
      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.bio}</Text>

      {/* Button */}
      <View style={{flexDirection: 'row'}}>
        <Button text="Edit Profile" onPress={() => console.warn('First')} />
        <Button text="Another Button" onPress={() => console.warn('Second')} />
      </View>
    </View>
  );
};
export default ProfileHeader;

const styles = StyleSheet.create({
  image: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 100,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  root: {padding: 10},
  numberText: {
    fontSize: size.md,
    color: color.black,
    fontWeight: weight.full,
  },
  numberContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: size.md,
    color: color.black,
    fontWeight: weight.full,
  },
});