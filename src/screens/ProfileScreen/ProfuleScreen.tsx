import React from 'react';
import user from '../../assets/data/user.json';
import {
  UserProfileNavigationProp,
  MyProfileNavigationProp,
  MyProfileRouteProp,
  UserProfileRouteProp,
} from '../../types/types';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView/FeedGridView';
import {useNavigation, useRoute} from '@react-navigation/native';

const ProfuleScreen = () => {
  const route = useRoute<MyProfileRouteProp | UserProfileRouteProp>();
  const navigation = useNavigation<
    UserProfileNavigationProp | MyProfileNavigationProp
  >();
  const userId = route.params?.userId;

  //Query user with userId

  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfuleScreen;
