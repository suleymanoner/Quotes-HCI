import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {ButtonWithIcon} from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import {RootStackParams} from '../../App';
import Toast from 'react-native-root-toast';
import ImagePicker from 'react-native-image-crop-picker';

interface EditProfileScreenProps {
  route: any;
}

const EditProfileScreen: React.FC<EditProfileScreenProps> = ({route}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const user = {
    profile_photo: 'https://avatars.githubusercontent.com/u/71967979?v=4',
    name: 'Suleyman',
    surname: 'Oner',
    bio: 'Movie lover.',
  };

  const {type} = route.params;
  const [photo, setPhoto] = useState(user.profile_photo);

  const goBack = () => {
    navigation.goBack();
  };

  const chooseFromLibrary = () => {
    try {
      ImagePicker.openPicker({
        width: 350,
        height: 300,
        cropping: true,
      })
        .then(image => {
          setPhoto(image.path);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log('error: ' + error);
    }
  };

  const onTapSave = async () => {
    if (type == 'Edit Profile') {
      Toast.show('You editted profile!', {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
    } else if (type == 'Change Password') {
      Toast.show('You changed password!', {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
    }

    setTimeout(() => {
      goBack();
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Text style={styles.top_container_title}>"{type}"</Text>
        <TouchableOpacity onPress={goBack} style={styles.top_container_icon}>
          <Icon name="keyboard-backspace" color="black" size={30} />
        </TouchableOpacity>
      </View>
      {type == 'Edit Profile' ? (
        <View>
          <View style={styles.user_info_container}>
            <TouchableOpacity onPress={() => chooseFromLibrary()}>
              <Image source={{uri: photo}} style={styles.top_container_image} />
            </TouchableOpacity>
          </View>
          <View style={styles.edit_input_container}>
            <View style={styles.text_input_container}>
              <TextInput
                placeholder="Change name"
                autoCapitalize="none"
                defaultValue={user.name}
                onChangeText={() => {}}
                style={styles.textField}
              />
            </View>
            <View style={styles.text_input_container}>
              <TextInput
                placeholder="Change surname"
                autoCapitalize="none"
                defaultValue={user.surname}
                onChangeText={() => {}}
                style={styles.textField}
              />
            </View>
            <View style={styles.text_input_container}>
              <TextInput
                placeholder="Add bio"
                autoCapitalize="none"
                defaultValue={user.bio}
                onChangeText={() => {}}
                style={styles.textField}
              />
            </View>
          </View>
        </View>
      ) : (
        <View style={{marginTop: 35}}>
          <View style={styles.text_input_container}>
            <TextInput
              placeholder="Old Password"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={() => {}}
              style={styles.textField}
            />
          </View>
          <View style={styles.text_input_container}>
            <TextInput
              placeholder="New Password"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={() => {}}
              style={styles.textField}
            />
          </View>
          <View style={styles.text_input_container}>
            <TextInput
              placeholder="New Password Again"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={() => {}}
              style={styles.textField}
            />
          </View>
        </View>
      )}
      <View style={{position: 'absolute', bottom: 10, right: 10}}>
        <ButtonWithIcon
          btnColor="#7182BD"
          height={50}
          width={100}
          onTap={() => onTapSave()}
          title="Save"
          txtColor="white"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4E4E4',
  },
  top_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  top_container_icon: {
    position: 'absolute',
    left: 0,
    top: 15,
    marginLeft: 10,
  },
  top_container_title: {
    fontSize: 30,
    fontFamily: 'bahnschrift',
    marginTop: 10,
    color: 'black',
    textAlign: 'center',
  },
  user_info_container: {
    alignItems: 'center',
    marginTop: 10,
  },
  post_flatlist: {
    marginTop: 10,
  },
  edit_input_container: {
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  followings_detail_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  user_name_text: {
    fontSize: 25,
    fontFamily: 'Roboto-Regular',
    marginTop: 10,
    color: 'black',
  },
  user_account_name_text: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    marginTop: 5,
    color: 'gray',
  },
  top_container_image: {
    width: 90,
    height: 90,
    borderRadius: 50,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  info_text: {
    fontSize: 17,
    marginLeft: 10,
    fontFamily: 'Roboto-Regular',
    color: 'black',
  },
  followers_text: {
    fontSize: 17,
    fontFamily: 'Roboto-Regular',
    color: 'black',
  },
  text_input_container: {
    height: 55,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginLeft: 25,
    marginRight: 25,
    paddingRight: 10,
    paddingLeft: 20,
    borderWidth: 2,
    borderColor: 'black',
  },
  textField: {
    flex: 1,
    width: 320,
    height: 50,
    fontSize: 16,
    color: 'black',
  },
});

export {EditProfileScreen};
