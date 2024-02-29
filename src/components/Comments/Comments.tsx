import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import color from '../../themes/colors';
import {size, weight} from '../../themes/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IComment} from '../../types/models';

interface ICommentProps {
  comment: IComment;
  includeDetails: boolean;
}

const Comments = ({comment, includeDetails = false}: ICommentProps) => {
  const [isliked, setIsliked] = useState(false);

  const toggleLike = () => setIsliked(v => !v);

  return (
    <View style={styles.comment}>
      {includeDetails && (
        <Image source={{uri: comment.user.image}} style={styles.avatar} />
      )}
      <View style={styles.textcomment}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>{comment.user.username}</Text>
          {comment.comment}
        </Text>
        {includeDetails && (
          <View style={styles.footer}>
            <Text style={styles.footerText}> 2d</Text>
            <Text style={styles.footerText}>5 Likes</Text>
            <Text style={styles.footerText}> reply</Text>
          </View>
        )}
      </View>
      <Pressable onPress={toggleLike} hitSlop={10}>
        <AntDesign
          style={styles.icon}
          color={isliked ? color.accent : color.black}
          name={isliked ? 'heart' : 'hearto'}
        />
      </Pressable>
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
    marginVertical: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  footer: {marginBottom: 10, flexDirection: 'row'},
  userName: {
    fontSize: size.md,
    fontWeight: weight.bold,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
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
  },
  commentText: {
    color: color.black,
    lineHeight: 18,
  },
  textcomment: {flex: 1},
  footerText: {marginHorizontal: 5},
});
