import {
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as React from 'react';

export default function LoginPage({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('HomePage');
  };

  return (
    <ImageBackground
      source={require('../assets/Background.jpg')}
      style={styles.backgroundImage}
      imageStyle={{opacity: 0.3}}>
      <SafeAreaView style={styles.container}>
        <View style={styles.textInputStyles}>
          <TextInput
            placeholder="User Name"
            placeholderTextColor="#161717"
            style={styles.inputContainer}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#161717"
            style={styles.inputContainer}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onPressHandler}>
            <Text style={styles.textStyle}>LOGIN</Text>
          </TouchableOpacity>
        </View>

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
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    padding: 8,
    margin: 10,
    height: 40,
    width: 220,
    borderColor: '#6A0F91',
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 8,
    color: '#161717',
    fontSize: 16,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },

  buttonContainer: {
    backgroundColor: '#6A0F91',
    padding: 10,
    margin: 10,
    height: 40,
    width: 120,
    borderRadius: 8,
    alignSelf: 'center',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
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
