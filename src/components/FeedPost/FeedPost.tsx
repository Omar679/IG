import {Image, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import color from '../../themes/colors';
import styles from './styles';
import Comments from '../Comments';
import {IPost} from '../../types/models';

interface IFeedPost {
  post: IPost;
}

const FeedPost = ({post}: IFeedPost) => {
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

      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            style={styles.icon}
            color={color.black}
            size={24}
            name="hearto"
          />
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
          <Text style={styles.text}>
            {' '}
            <Text style={styles.bold}>{post.user.username}</Text>{' '}
            {post.description}
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
