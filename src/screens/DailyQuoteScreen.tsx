import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const DailyQuoteScreen = () => {
  const daily_quote = [
    {
      post_body: 'You shall not pass!',
      post_from: 'The Lord of the Rings',
      post_image:
        'https://cdn.vox-cdn.com/thumbor/bLcMIc6r1murhxrw90Q_nkg4z_k=/0x0:3831x1587/1200x675/filters:focal(1835x397:2447x1009)/cdn.vox-cdn.com/uploads/chorus_image/image/70123899/4k_fellowship_movie_screencaps.com_23524.0.jpg',
    },
    {
      post_body: "Tonight's the night!",
      post_from: 'Dexter',
      post_image:
        'https://c4.wallpaperflare.com/wallpaper/552/908/855/dexter-dexter-morgan-michael-c-hall-tv-series-wallpaper-preview.jpg',
    },
    {
      post_body: "I'm hopeless and awkward and desperate for love!",
      post_from: 'Friends',
      post_image:
        'https://img.wallpapersafari.com/desktop/1280/1024/49/47/VUfKoJ.jpg',
    },
  ];

  var post = daily_quote[Math.floor(Math.random() * daily_quote.length)];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>"Daily Quote"</Text>
      <View style={styles.text_container}>
        <Text style={styles.post_body_text}>"{post.post_body}"</Text>
        <Text style={styles.post_from_text}>• {post.post_from}</Text>
      </View>

      <View style={styles.image_container}>
        <Image source={{uri: post.post_image}} style={styles.post_image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4E4E4',
  },
  title: {
    fontSize: 30,
    fontFamily: 'bahnschrift',
    marginTop: 10,
    color: 'black',
    textAlign: 'center',
  },
  text_container: {
    marginTop: 25,
  },
  image_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    flex: 2,
    marginBottom: 15,
  },
  post_image: {
    width: '95%',
    height: undefined,
    alignItems: 'center',
    borderRadius: 10,
    aspectRatio: 1,
  },
  post_body_text: {
    color: 'black',
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    marginLeft: 30,
  },
  post_from_text: {
    color: 'black',
    textAlign: 'right',
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
    marginRight: 10,
    marginTop: 20,
    fontSize: 15,
  },
});

export {DailyQuoteScreen};
