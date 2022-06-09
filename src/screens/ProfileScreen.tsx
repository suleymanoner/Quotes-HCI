import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {ButtonWithIcon, QuoteCard} from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-root-toast';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import {RootStackParams} from '../../App';

const ProfileScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const user = {
    profile_photo: 'https://avatars.githubusercontent.com/u/71967979?v=4',
    name: 'Suleyman',
    surname: 'Oner',
    username: 'bosnak',
    bio: 'Movie lover.',
  };

  const onTapFollow = () => {
    Toast.show('User followed!', {
      duration: Toast.durations.LONG,
      position: Toast.positions.TOP,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  };

  const onTapSettings = () => {
    navigation.navigate('SettingPage');
  };

  const posts = [
    {
      user_img: 'https://avatars.githubusercontent.com/u/71967979?v=4',
      name: 'Suleyman',
      username: 'bosnak',
      date: '3 hr ago',
      post_body: 'You shall not pass!',
      post_from: 'The Lord of the Rings',
      post_image:
        'https://cdn.vox-cdn.com/thumbor/bLcMIc6r1murhxrw90Q_nkg4z_k=/0x0:3831x1587/1200x675/filters:focal(1835x397:2447x1009)/cdn.vox-cdn.com/uploads/chorus_image/image/70123899/4k_fellowship_movie_screencaps.com_23524.0.jpg',
    },
    {
      user_img: 'https://avatars.githubusercontent.com/u/71967979?v=4',
      name: 'Suleyman',
      username: 'bosnak',
      date: '3 hr ago',
      post_body: "Tonight's the night!",
      post_from: 'Dexter',
      post_image:
        'https://c4.wallpaperflare.com/wallpaper/552/908/855/dexter-dexter-morgan-michael-c-hall-tv-series-wallpaper-preview.jpg',
    },
    {
      user_img: 'https://avatars.githubusercontent.com/u/71967979?v=4',
      name: 'Suleyman',
      username: 'bosnak',
      date: '3 hr ago',
      post_body: "I'm hopeless and awkward and desperate for love!",
      post_from: 'Friends',
      post_image:
        'https://img.wallpapersafari.com/desktop/1280/1024/49/47/VUfKoJ.jpg',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Text style={styles.top_container_title}>"Profile"</Text>
        <TouchableOpacity
          onPress={() => onTapSettings()}
          style={styles.settings_icon}>
          <Icon name="cog-outline" color="black" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.user_info_container}>
        <Image
          source={{uri: user.profile_photo}}
          style={styles.top_container_image}
        />
        <View>
          <Text style={styles.user_name_text}>
            {user.name} {user.surname}
          </Text>
          <Text style={styles.user_account_name_text}>@{user.username}</Text>
        </View>
      </View>
      <View style={styles.follow_button_container}>
        <Text style={styles.info_text}>{user.bio}</Text>
        <ButtonWithIcon
          height={30}
          title="Follow"
          btnColor="#7182BD"
          txtColor="white"
          width={100}
          onTap={() => onTapFollow()}
        />
      </View>
      <View style={styles.followings_detail_container}>
        <View>
          <Text style={[styles.followers_text, {marginLeft: 30}]}>
            Followers
          </Text>
          <Text
            style={[
              styles.followers_text,
              {marginLeft: 55, marginTop: 5, fontWeight: '700'},
            ]}>
            45
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.followers_text,
              {textAlign: 'right', marginRight: 30},
            ]}>
            Following
          </Text>
          <Text
            style={[
              styles.followers_text,
              {
                textAlign: 'right',
                marginTop: 5,
                marginRight: 55,
                fontWeight: '700',
              },
            ]}>
            56
          </Text>
        </View>
      </View>

      <FlatList
        data={posts}
        initialNumToRender={3}
        renderItem={({item}) => (
          <QuoteCard
            user_img={item.user_img}
            name={item.name}
            username={item.username}
            date={item.date}
            post_body={item.post_body}
            post_from={item.post_from}
            post_image={item.post_image}
          />
        )}
      />
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
  settings_icon: {
    position: 'absolute',
    right: 5,
  },
  top_container_title: {
    fontSize: 30,
    fontFamily: 'bahnschrift',
    marginTop: 10,
    color: 'black',
    textAlign: 'center',
  },
  user_info_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  post_flatlist: {
    marginTop: 10,
  },
  follow_button_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  followings_detail_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
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
});

export {ProfileScreen};
