import * as React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LoginPage from './loginPage';

export default function LandingPage({navigation}) {
  setTimeout(() => {
    navigation.navigate('LoginPage');
  }, 2500);

  // const onPressHandler = () => {
  //   navigation.navigate('LoginPage');
  // };

  return (
    <ImageBackground
      source={require('../assets/Background.jpg')}
      style={styles.backgroundImage}
      imageStyle={{opacity: 0.3}}>
      <View style={styles.container}>
        <View style={styles.centerContainerStyle}>
          <Text style={styles.centerTextStyle}>Welcome</Text>

          <Image
            source={require('../assets/Clubtrackicon.png')}
            resizeMode="contain"
            style={styles.centerImageStyle}></Image>
          <Text style={styles.centerTextStyle}>Face Registration</Text>
        </View>
        {/* <TouchableOpacity onPress={onPressHandler}>
          <Text>Login</Text>
        </TouchableOpacity> */}

        <View style={styles.footerStyle}>
          <Text style={styles.footerText}>
            Copyright @ 2022, All Rights Reserved Powered By
          </Text>
          <Image
            source={require('../assets/Leftcompanylogo.png')}
            resizeMode="contain"
            style={styles.leftImageStyle}></Image>
          <Image
            source={require('../assets/Rightcompanylogo.png')}
            resizeMode="contain"
            style={styles.rightImageStyle}></Image>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },

  centerTextStyle: {
    textAlign: 'center',
    color: '#6A0F91',
    padding: 4,
    fontWeight: 'bold',
    fontSize: 30,
  },
  centerImageStyle: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },

  footerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  footerText: {
    marginLeft: 50,
    marginRight: 50,
    fontSize: 10,
  },
  leftImageStyle: {
    width: 80,
    height: 50,
    alignSelf: 'center',
  },
  rightImageStyle: {
    width: 150,
    height: 50,
  },
});
