import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {TextField, ButtonWithIcon} from '../components';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import {RootStackParams} from '../../App';
import Toast from 'react-native-root-toast';

const LoginScreen = ({}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [username, setUsername] = useState('');

  const showMsg = (msg: string) => {
    Toast.show(msg, {
      duration: Toast.durations.LONG,
      position: Toast.positions.TOP,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  };

  const onSignUp = async () => {
    if (
      email.length == 0 ||
      password.length == 0 ||
      name.length == 0 ||
      surname.length == 0 ||
      username.length == 0
    ) {
      showMsg('Please fill all blanks!');
    } else {
      if (password == passwordAgain) {
        showMsg('Signed up correctly!');
        setTimeout(() => {
          navigation.navigate('BottomTabStack');
        }, 2000);
      } else {
        showMsg('Your passwords not matched!');
      }
    }
  };

  const onLogin = () => {
    if (email.length == 0 || password.length == 0) {
      showMsg('Please fill all blanks!');
    } else {
      showMsg('Signed in correctly!');
      setTimeout(() => {
        navigation.navigate('BottomTabStack');
      }, 2000);
    }
  };

  const onTapGoNextScreen = (where: string) => {
    if (where == 'signup') {
      setIsSignUp(true);
    } else {
      setIsSignUp(false);
    }
  };

  if (!isSignUp) {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Image
            source={require('../assets/images/quotes-white-logo.png')}
            style={styles.image}
          />
          <Text style={styles.title}>"Quotes"</Text>
        </View>

        <View style={styles.input_container}>
          <TextField placeholder="email" onTextChange={setEmail} />
          <TextField
            placeholder="password"
            onTextChange={setPassword}
            isSecure={true}
          />
          <ButtonWithIcon
            onTap={onLogin}
            title="Sign In"
            width={350}
            height={50}
            iconName="login"
            iconColor="#7182BD"
            iconSize={30}
            btnColor="white"
            txtColor="#7182BD"
          />

          <TouchableOpacity onPress={() => onTapGoNextScreen('signup')}>
            <Text style={styles.link_text}>
              You don't have account yet? Click for Sign-up.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>"Sign Up"</Text>

        <TextField placeholder="Name" onTextChange={setName} />
        <TextField placeholder="Surname" onTextChange={setSurname} />
        <TextField placeholder="Email" onTextChange={setEmail} />
        <TextField placeholder="Username" onTextChange={setUsername} />
        <TextField
          placeholder="Password"
          onTextChange={setPassword}
          isSecure={true}
        />
        <TextField
          placeholder="Password Again"
          onTextChange={setPasswordAgain}
          isSecure={true}
        />

        <ButtonWithIcon
          onTap={onSignUp}
          title="Sign Up"
          width={350}
          height={50}
          iconName="account-plus"
          iconColor="#7182BD"
          iconSize={30}
          btnColor="white"
          txtColor="#7182BD"
        />

        <TouchableOpacity onPress={() => onTapGoNextScreen('signin')}>
          <Text style={styles.link_text}>
            Do you have account? Click for Sign-in.
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7182BD',
  },
  body: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input_container: {
    flex: 8,
  },
  image: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 45,
    marginBottom: 15,
    marginTop: 15,
    fontFamily: 'bahnschrift',
    color: 'white',
    textAlign: 'center',
  },
  link_text: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
  },
});

export {LoginScreen};
