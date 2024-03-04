import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/Homescreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import ProfileScreen from '../screens/ProfileScreen';
import logo from '../assets/images/logo.png';
import {Image} from 'react-native';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserProfile"
        screenOptions={{headerShown: true}}>
        <Stack.Screen name="Feed" component={HomeScreen} />
        <Stack.Screen
          name="UserProfile"
          component={HomeScreen}
          options={{headerTitle: HeaderTitle, headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HeaderTitle = () => {
  return (
    <Image
      source={logo}
      resizeMode="contain"
      style={{width: 150, height: 40}}
    />
  );
};

export default Navigation;
