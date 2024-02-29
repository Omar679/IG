import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {IPost} from '../../types/models';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../../themes/colors';

const FeedGridItem = ({post}: {post: IPost}) => {
  return (
    <View style={{flex: 1, aspectRatio: 1, margin: 1, maxWidth: '33.3333%'}}>
      <Image source={{uri: post.image || post.images[0]}} style={{flex: 1}} />

      {post.images && (
        <MaterialIcons
          name="collections"
          size={16}
          style={{position: 'absolute', top: 5, right: 5}}
          color={color.white}
        />
      )}
    </View>
  );
};

export default FeedGridItem;

const styles = StyleSheet.create({});
