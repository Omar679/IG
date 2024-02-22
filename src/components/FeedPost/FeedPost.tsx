import {Image, Text, View} from 'react-native';
import React from 'react';
import {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import color from '../../themes/colors';
import styles from './styles';
import Comments from '../Comments';
import {IPost} from '../../types/models';
import {Pressable} from 'react-native';
import DoublePressable from '../DoublePressable';

interface IFeedPost {
  post: IPost;
}

const FeedPost = ({post}: IFeedPost) => {
  const [isDescriptionExpanded, setisDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const toggleText = () => setisDescriptionExpanded(v => !v);
  const toggleLike = () => setIsLiked(v => !v);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.avatar}
        />
        <Text style={styles.userName}>{post.user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          color={color.primary}
          style={styles.threeDots}
        />
      </View>
      {/* content */}

      <DoublePressable onDoublePress={toggleLike}>
        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        />
      </DoublePressable>
      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign
              style={styles.icon}
              color={isLiked ? color.accent : color.black}
              size={24}
              name={isLiked ? 'heart' : 'hearto'}
            />
          </Pressable>
          <Ionicons
            style={styles.icon}
            color={color.black}
            size={24}
            name="chatbubble-outline"
          />
          <Feather
            name="send"
            style={styles.icon}
            color={color.black}
            size={24}
          />
          <Feather
            name="bookmark"
            color={color.black}
            style={[styles.icon, {marginLeft: 'auto'}]}
            size={24}
          />
        </View>
        {/* Likes */}

        <View>
          <Text style={styles.text}>
            {' '}
            Linked by <Text style={styles.bold}>Mairoba</Text> and{' '}
            <Text style={styles.bold}>{post.nofLikes} others</Text>{' '}
          </Text>
        </View>
        {/* description */}
        <View>
          <Text
            style={styles.text}
            numberOfLines={isDescriptionExpanded ? 0 : 2}>
            {' '}
            <Text style={styles.bold}>{post.user.username}</Text>{' '}
            {post.description}
          </Text>
          <Text onPress={toggleText}>
            {' '}
            {isDescriptionExpanded ? 'See Less' : 'See More'}
          </Text>
        </View>

        {/* comment */}
        <Text>View all {post.nofComments} comments</Text>
        {post.comments.map(comment => (
          <Comments key={comment.id} comment={comment} />
        ))}
        {/* posted date */}
        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
