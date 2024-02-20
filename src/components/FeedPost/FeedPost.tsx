import {Image, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import color from '../../themes/colors';
import styles from './styles';

const FeedPost = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
          }}
          style={styles.avatar}
        />
        <Text style={styles.userName}>Umar Sabiu</Text>
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
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
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
            <Text style={styles.bold}>66 others</Text>{' '}
          </Text>
        </View>
        {/* description */}
        <View>
          <Text style={styles.text}>
            {' '}
            <Text style={styles.bold}>Mairoba</Text> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Culpa quia dolores, magnam id impedit
            sint sunt possimus sequi quibusdam maxime et voluptates illum qui
            aspernatur, necessitatibus voluptate minus eum delectus.
          </Text>
        </View>

        {/* comment */}
        <Text>View all 16 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>Mummuni</Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, at
            sequi eaque maxime facilis error?
          </Text>
          <AntDesign style={styles.icon} color={color.black} name="hearto" />
        </View>
        {/* posted date */}
        <Text>19 December 2021</Text>
      </View>
    </View>
  );
};

export default FeedPost;
