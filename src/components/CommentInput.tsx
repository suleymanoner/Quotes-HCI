import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import {ButtonWithIcon} from './ButtonWithIcon';
import Toast from 'react-native-root-toast';
import {StackNavigationProp} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import {RootStackParams} from '../../App';
import {useNavigation} from '@react-navigation/native';

interface CommentInputProps {
  image: string;
  name: string;
  acc_name: string;
}

const CommentInput: React.FC<CommentInputProps> = ({image, name, acc_name}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const [comm, setComm] = useState('');

  const showComment = (comment: string) => {
    Toast.show("Comment: '" + comment + "' sent!", {
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

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Image source={{uri: image}} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.username}>@{acc_name}</Text>
      </View>

      <View style={styles.text_field_container}>
        <TextInput
          placeholder="Enter comment.."
          autoCapitalize="none"
          onChangeText={text => setComm(text)}
          style={styles.textField}
        />
      </View>

      <View style={styles.button_container}>
        <ButtonWithIcon
          title="Send"
          onTap={() => showComment(comm)}
          width={100}
          height={40}
          btnColor="#7182BD"
          txtColor="white"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E4E4E4',
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
    flexDirection: 'column',
  },
  top_container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
  button_container: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginRight: 20,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 30,
    margin: 5,
    borderWidth: 1,
    borderColor: 'black',
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
});

export {CommentInput};
