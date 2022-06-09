import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import {UserCard} from '../components/UserCard';

const SearchScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [txt, setTxt] = useState('');

  const users = [
    {
      image:
        'https://static01.nyt.com/images/2021/12/22/arts/17elijah-wood1/17elijah-wood1-videoSixteenByNineJumbo1600.jpg',
      name: 'Frodo Baggins',
      username: 'hobbit',
    },
    {
      image:
        'https://apilgriminnarnia.files.wordpress.com/2017/06/samwise-gamgee-wonder.jpg?w=640',
      name: 'Sam Gamgee',
      username: 'hobbit2',
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/tr/6/6b/Gandalf.jpg',
      name: 'Gandalf',
      username: 'the_white',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Text style={styles.top_container_title}>"Search"</Text>
      </View>

      <View style={styles.text_field_container}>
        <TextInput
          placeholder="Enter username.."
          autoCapitalize="none"
          onTouchStart={() => setIsEditing(true)}
          onEndEditing={() => setIsEditing(false)}
          onChangeText={text => setTxt(text)}
          style={styles.textField}
        />
      </View>

      {isEditing ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={
            isEditing
              ? users.filter(item => {
                  return item.name.toLocaleLowerCase().includes(txt);
                })
              : users
          }
          renderItem={({item}) => (
            <UserCard
              image={item.image}
              name={item.name}
              username={item.username}
            />
          )}
          keyExtractor={item => `${item.name}`}
        />
      ) : (
        <></>
      )}
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
  },
  top_container_title: {
    fontSize: 30,
    fontFamily: 'bahnschrift',
    marginTop: 10,
    color: 'black',
  },
  text_field_container: {
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
    width: 320,
    height: 50,
    fontSize: 16,
    color: 'black',
    fontFamily: 'Roboto-Regular',
  },
});

export {SearchScreen};
