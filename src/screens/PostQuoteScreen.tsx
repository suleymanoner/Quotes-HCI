import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ButtonWithIcon} from '../components';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import {RootStackParams} from '../../App';
import Toast from 'react-native-root-toast';
import ImagePicker from 'react-native-image-crop-picker';

const PostQuoteScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const [qFrom, setQFrom] = useState('');
  const [quote, setQuote] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);

  const goBack = () => {
    navigation.goBack();
  };

  const user = {
    profile_photo: 'https://avatars.githubusercontent.com/u/71967979?v=4',
    name: 'Suleyman',
    surname: 'Oner',
    username: 'bosnak',
    bio: 'Movie lover.',
  };

  const chooseFromLibrary = () => {
    try {
      ImagePicker.openPicker({
        width: 350,
        height: 300,
        cropping: true,
      })
        .then(image => {
          console.log(image);
          setPhoto(image.path);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log('error: ' + error);
    }
  };

  const onTapSend = () => {
    Toast.show("'" + quote + "' from: '" + qFrom + "' sent!", {
      duration: Toast.durations.LONG,
      position: Toast.positions.TOP,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
    setTimeout(() => {
      navigation.goBack();
    }, 1000);
  };

  // https://i.ndtvimg.com/i/2014-10/benedict-cumberbatch_625x300_41414581866.jpg

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <TouchableOpacity style={{marginLeft: 10}} onPress={() => goBack()}>
          <Icon
            name="close"
            color="#00344F"
            size={30}
            style={styles.exit_icon}
          />
        </TouchableOpacity>
        <Text style={styles.top_container_title}>"Post Quote"</Text>
      </View>

      <View style={styles.inside_container}>
        <View style={styles.inside_top_container}>
          <Image source={{uri: user.profile_photo}} style={styles.image} />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.username}>@{user.username}</Text>
        </View>

        <View style={styles.text_field_container}>
          <TextInput
            placeholder="Quote From.."
            autoCapitalize="none"
            onChangeText={text => setQFrom(text)}
            underlineColorAndroid="transparent"
            style={styles.textField}
          />
        </View>

        <View style={[styles.text_field_container, {height: 70}]}>
          <TextInput
            placeholder="Quote.."
            autoCapitalize="none"
            onChangeText={text => setQuote(text)}
            multiline={true}
            underlineColorAndroid="transparent"
            style={[styles.textField, {textAlignVertical: 'top', height: 70}]}
          />
        </View>

        <View style={styles.image_container}>
          {photo == null ? (
            <></>
          ) : (
            <Image
              source={{
                uri: photo,
              }}
              style={styles.post_image}
            />
          )}
        </View>

        <View style={styles.bottom_container}>
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => chooseFromLibrary()}>
            <Icon name="image" color="#00344F" size={35} />
          </TouchableOpacity>

          <View style={{marginRight: 20}}>
            <ButtonWithIcon
              title="Send"
              onTap={() => onTapSend()}
              width={100}
              height={40}
              btnColor="#7182BD"
              txtColor="white"
            />
          </View>
        </View>
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
    marginBottom: 10,
  },
  exit_icon: {
    right: 75,
    position: 'absolute',
    bottom: -25,
  },
  top_container_title: {
    fontSize: 30,
    fontFamily: 'bahnschrift',
    marginTop: 10,
    color: 'black',
    textAlign: 'center',
  },
  bottom_container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inside_container: {
    backgroundColor: '#E4E4E4',
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
    flexDirection: 'column',
  },
  inside_top_container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
    marginTop: 11,
    color: 'black',
    marginLeft: 5,
  },
  username: {
    fontSize: 15,
    marginTop: 15,
    marginLeft: 5,
    color: 'gray',
    fontFamily: 'Roboto-Regular',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 30,
    margin: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  text_field_container: {
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginLeft: 45,
    marginRight: 25,
    paddingRight: 10,
    paddingLeft: 20,
    borderWidth: 2,
    borderColor: 'black',
  },
  textField: {
    width: 300,
    height: 50,
    fontSize: 16,
    color: 'black',
    fontFamily: 'Roboto-Regular',
  },
  image_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  post_image: {
    width: '80%',
    height: undefined,
    alignItems: 'center',
    borderRadius: 10,
    aspectRatio: 1,
    marginLeft: 15,
  },
});

export {PostQuoteScreen};
