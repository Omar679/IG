import React from 'react';

import {FlatList, StyleSheet, View} from 'react-native';
import posts from '../../assets/data/posts.json';
import FeedPost from '../../components/FeedPost';

const HomeScreen = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={posts}
      renderItem={({item}) => <FeedPost post={item} />}
    />
  );
};

export default HomeScreen;
