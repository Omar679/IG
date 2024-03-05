import {NavigationContainer} from '@react-navigation/native';
// import HomeScreen from '../screens/HomeScreen/Homescreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import ProfileScreen from '../screens/ProfileScreen';

// import ProfileScreen from '../screens/ProfileScreen';
import BottomTabs from './BottomTabs';
import CommentsScreen from '../screens/CommentsScreen';

import {RootNavigator} from './types';

const Stack = createNativeStackNavigator<RootNavigator>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="Home"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Comments" component={CommentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
