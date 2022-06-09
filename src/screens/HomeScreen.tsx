import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import {RootStackParams} from '../../App';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {QuoteCard} from '../components/QuoteCard';

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const onTapProfilePhoto = () => {
    navigation.navigate('ProfileScreenStack');
  };

  const onTapPostQuote = () => {
    navigation.navigate('PostQuotePage');
  };

  const user_img = 'https://avatars.githubusercontent.com/u/71967979?v=4';

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
      post_body: 'You can always be thinner, look better.',
      post_from: 'American Psycho',
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
      date: '4 hr ago',
      post_body: "I'm hopeless and awkward and desperate for love!",
      post_from: 'Friends',
      post_image:
        'https://img.wallpapersafari.com/desktop/1280/1024/49/47/VUfKoJ.jpg',
    },
    {
      user_img: 'https://avatars.githubusercontent.com/u/71967979?v=4',
      name: 'Suleyman',
      username: 'bosnak',
      date: '5 hr ago',
      post_body: "I'm getting you out of here!",
      post_from: 'Prison Break',
      post_image:
        'https://m.media-amazon.com/images/M/MV5BMjZjOThjNTktNmMyYi00MTcyLWI5NWItODFiNDE0MTE4NTE1XkEyXkFqcGdeQXVyNjk0MjU0ODE@._V1_.jpg',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <TouchableOpacity onPress={() => onTapProfilePhoto()}>
          <Image source={{uri: user_img}} style={styles.top_container_image} />
        </TouchableOpacity>
        <Text style={styles.top_container_title}>"Quotes"</Text>
        <TouchableOpacity onPress={() => onTapPostQuote()}>
          <Icon
            name="comment-quote-outline"
            color="#00344F"
            size={35}
            style={styles.top_container_icon}
          />
        </TouchableOpacity>
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
    justifyContent: 'space-between',
  },
  top_container_title: {
    fontSize: 30,
    fontFamily: 'bahnschrift',
    marginTop: 10,
    color: 'black',
  },
  top_container_image: {
    width: 40,
    height: 40,
    borderRadius: 30,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  top_container_icon: {
    margin: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
});

export {HomeScreen};
