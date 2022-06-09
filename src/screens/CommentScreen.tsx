import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {StackNavigationProp} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import {RootStackParams} from '../../App';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CommentInput, CommentCard} from '../components';

const CommentScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const goBack = () => {
    navigation.goBack();
  };

  const comments = [
    {
      image: 'https://avatars.githubusercontent.com/u/71967979?v=4',
      name: 'Suleyman',
      username: 'oner',
      date: '3 hr ago',
      comment: 'Super movie!',
    },
    {
      image: 'https://avatars.githubusercontent.com/u/71967979?v=4',
      name: 'Suleyman',
      username: 'oner',
      date: '3 hr ago',
      comment: 'Awesome movie!',
    },
    {
      image: 'https://avatars.githubusercontent.com/u/71967979?v=4',
      name: 'Suleyman',
      username: 'oner',
      date: '3 hr ago',
      comment: 'Has to win Oscar!',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <TouchableOpacity onPress={goBack} style={styles.top_container_icon}>
          <Icon name="keyboard-backspace" color="black" size={30} />
        </TouchableOpacity>
        <Text style={styles.top_container_title}>"Comments"</Text>
      </View>

      <CommentInput
        image="https://avatars.githubusercontent.com/u/71967979?v=4"
        name="Suleyman Oner"
        acc_name="bosnak"
      />

      <FlatList
        data={comments}
        initialNumToRender={3}
        renderItem={({item}) => (
          <CommentCard
            image={item.image}
            name={item.name}
            username={item.username}
            date={item.date}
            comment={item.comment}
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
    marginBottom: 20,
  },
  top_container_title: {
    fontSize: 30,
    fontFamily: 'bahnschrift',
    marginTop: 10,
    color: 'black',
  },
  top_container_icon: {
    position: 'absolute',
    left: 0,
    top: 15,
    marginLeft: 10,
  },
});

export {CommentScreen};
