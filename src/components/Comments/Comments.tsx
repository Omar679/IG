import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import color from '../../themes/colors';
import {size, weight} from '../../themes/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IComment} from '../../types/models';

interface ICommentProps {
  comment: IComment;
}

const Comments = ({comment}: ICommentProps) => {
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.username}</Text>
        {comment.comment}
      </Text>
      <AntDesign style={styles.icon} color={color.black} name="hearto" />
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  footer: {padding: 10},
  userName: {
    fontSize: size.md,
    fontWeight: weight.bold,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  post: {},
  threeDots: {marginLeft: 'auto'},
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  text: {
    color: color.black,
    lineHeight: 18,
  },
  bold: {
    fontWeight: weight.bold,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    color: color.black,
    lineHeight: 18,
    flex: 1,
  },
});
