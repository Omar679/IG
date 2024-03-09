import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert,
} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {SignInNavigationProp} from '../../../types/navigation';
import {signIn, type SignInInput} from 'aws-amplify/auth';
import {useState} from 'react';

type SignInData = {
  email: string;
  password: string;
};

const SignInScreen = () => {
  const [loading, setloading] = useState(false);
  const {height} = useWindowDimensions();
  const navigation = useNavigation<SignInNavigationProp>();

  const {control, handleSubmit, reset} = useForm<SignInData>();

  const handleSignIn = async ({username, password}: SignInInput) => {
    if (loading) {
      return;
    }
    setloading(true);
    try {
      const {isSignedIn, nextStep} = await signIn({username, password});

      // Save User data in context
    } catch (e) {
      Alert.alert('Ooops', (e as any).message);
      // console.warn(navigation.replace('Home'));
    } finally {
      setloading(false);
      reset();
    }
  };

  // const onSignInPressed = () => {};

  // async function handleSignOut() {
  //   try {
  //     await signOut();
  //   } catch (error) {
  //     console.log('error signing out: ', error);
  //   }
  // }

  const onForgotPasswordPressed = () => {
    navigation.navigate('Forgot password');
  };

  const onSignUpPress = () => {
    navigation.navigate('Sign up');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <FormInput
          name="username"
          placeholder="username"
          control={control}
          rules={{required: 'Username is required'}}
        />

        <FormInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long',
            },
          }}
        />

        <CustomButton
          text={loading ? 'Loading...' : 'Sign In'}
          onPress={handleSubmit(handleSignIn)}
        />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
        />

        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
