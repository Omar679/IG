import React from 'react';
import {withAuthenticator} from '@aws-amplify/ui-react-native';
import {StyleSheet, View} from 'react-native';
import Navigation from './src/navigation';
import {Amplify} from 'aws-amplify';
import awsExports from './src/aws-exports';

Amplify.configure(awsExports);

const App = () => {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
};

export default withAuthenticator(App, {
  signUpAttributes: [
    'address',
    'birthdate',
    'email',
    'family_name',
    'gender',
    'given_name',
    'locale',
    'middle_name',
    'name',
    'nickname',
    'phone_number',
    'picture',
    'preferred_username',
    'profile',
    'updated_at',
    'website',
    'zoneinfo',
  ],
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
