import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
// import HomeScreen from '../screens/HomeScreen/Homescreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import ProfileScreen from '../screens/ProfileScreen';

// import ProfileScreen from '../screens/ProfileScreen';
import BottomTabs from './BottomTabs';
import CommentsScreen from '../screens/CommentsScreen';

import {RootNavigator, RootNavigatorParamList} from './types';
import AuthStackNavigator from './AuthStackNavigator';
import HomeScreen from '../screens/HomeScreen/Homescreen';

const Stack = createNativeStackNavigator<RootNavigator>();

const linking: LinkingOptions<RootNavigatorParamList> = {
  prefixes: ['ig://', 'https://ig.com'],
  config: {
    initialRouteName: 'Home',
    screens: {
      Comments: 'comments', // ig/comments
      Home: {
        screens: {
          HomeStack: {
            initialRouteName: 'Feed',
            screens: {
              UserProfile: 'user/:userId',
            },
          },
        },
      },
    },
  },
};

const Navigation = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="Auth"
          component={AuthStackNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Comments" component={CommentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
