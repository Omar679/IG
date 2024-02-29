import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import user from '../../assets/data/user.json';
import {weight} from '../../themes/fonts';
import color from '../../themes/colors';
import {Controller, useForm, Control} from 'react-hook-form';
import {IUser} from '../../types/models';

const REGEX_URL =
  / (http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&=]*)/;

type IEditableUserField = 'name' | 'website' | 'username' | 'bio';
type IEditableUser = Pick<IUser, IEditableUserField>;

interface ICustomInput {
  label: string;
  control: Control<IEditableUser, object>;
  multiline?: boolean;
  name: IEditableUserField;
  rules?: object;
}

const CustomInput = ({
  label,
  control,
  multiline = false,
  name,
  rules = {},
}: ICustomInput) => {
  return (
    <View>
      <Controller
        name={name}
        rules={rules}
        control={control}
        render={({field: {onBlur, onChange, value}, fieldState: {error}}) => {
          return (
            <View style={styles.customContainer}>
              <Text style={styles.labelText}>{label}</Text>
              <View style={{flex: 1}}>
                <TextInput
                  placeholder={label}
                  style={[
                    styles.input,
                    {borderColor: error ? color.warning : color.border},
                  ]}
                  multiline={multiline}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                {error && (
                  <Text style={{color: error ? color.accent : color.black}}>
                    {error.message || 'Error'}
                  </Text>
                )}
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const onSubmit = (data: IEditableUser) => {
  console.log(data);
};

const EditProfileScreen = () => {
  const [changeImger, setChangeImger] = useState<null | Asset>(null);
  const {control, handleSubmit} = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      bio: user.bio,
      username: user.username,
      website: user.website,
    },
  });

  const onChangeProfileImage = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, assets, errorCode}) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
          setChangeImger(assets[0]);
        }
      },
    );
  };

  return (
    <View style={styles.root}>
      <Image
        source={{uri: changeImger?.uri || user.image}}
        style={styles.avatar}
      />
      <Text style={styles.textButton} onPress={onChangeProfileImage}>
        Change Profile Photo
      </Text>
      <CustomInput
        rules={{
          required: 'Username is needed',
          minLength: {value: 3, message: 'Minimum of 3 Xters is required'},
        }}
        label="Name"
        control={control}
        name="name"
      />
      <CustomInput
        label="Username"
        control={control}
        name="username"
        rules={{required: 'Username is required'}}
      />
      <CustomInput
        label="Website"
        control={control}
        name="website"
        rules={{required: 'Website is required', pattern: REGEX_URL}}
      />
      <CustomInput
        label="Bio"
        control={control}
        multiline={true}
        name="bio"
        rules={{
          maxLength: {value: 200, message: "Bio can't take morethan 200 Xters"},
        }}
      />
      <Pressable onPress={handleSubmit(onSubmit)}>
        <Text style={styles.textButton}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  avatar: {
    width: '33%',
    aspectRatio: 1,
    borderRadius: 100,
    alignSelf: 'center',
  },
  textButton: {
    fontWeight: weight.bold,
    alignSelf: 'center',
    color: color.primary,
    marginVertical: 10,
  },
  submitButton: {},
  customContainer: {flexDirection: 'row', alignItems: 'center'},
  labelText: {width: 100},
  root: {padding: 10},
  input: {
    borderColor: color.border,
    borderBottomWidth: 1,
  },
});
