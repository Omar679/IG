import {StyleSheet} from 'react-native';
import React from 'react';
import user from '../../assets/data/user.json';
import {size, weight} from '../../themes/fonts';
import color from '../../themes/colors';
// import FeedPost from '../../components/FeedPost';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView/FeedGridView';

const ProfuleScreen = () => {
  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfuleScreen;

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
