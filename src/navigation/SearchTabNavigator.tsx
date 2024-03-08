import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CommentsScreen from '../screens/CommentsScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import color from '../themes/colors';
import {SearchTabNavigatorParamList} from '../types/navigation';
import UserSearchScreen from '../screens/UserSearchScreen';

const Tab = createMaterialTopTabNavigator<SearchTabNavigatorParamList>();

const SearchTabNavigator = () => {
  const insects = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {paddingTop: insects.top},
        tabBarIndicatorStyle: {backgroundColor: color.primary},
      }}>
      <Tab.Screen component={UserSearchScreen} name="Users" />
      <Tab.Screen component={CommentsScreen} name="Posts" />
    </Tab.Navigator>
  );
};

export default SearchTabNavigator;
