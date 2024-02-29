import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import comment from '../../assets/data/comments.json';
import Comments from '../../components/Comments';
import Input from './Input';

const CommentsScreen = () => {
  return (
    <View style={styles.commentsScreen}>
      <FlatList
        data={comment}
        renderItem={({item}) => (
          <Comments comment={item} includeDetails={true} />
        )}
        showsVerticalScrollIndicator={false}
      />
      <Input />
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  commentsScreen: {marginHorizontal: 5, flex: 1},
});
