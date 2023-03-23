import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Header,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function HomePage({navigation}) {
  const onPressFaceRegHandler = () => {
    navigation.navigate('FaceRegPage');
  };

  return (
    <ImageBackground
      source={require('../assets/Background.jpg')}
      style={styles.backgroundImage}
      imageStyle={{opacity: 0.3}}>
      <View style={styles.homeStyle}>
        <Text style={styles.homeText}>Home</Text>
      </View>

      <SafeAreaView style={styles.container}>
        <View style={styles.inputTextStyles}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onPressFaceRegHandler}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/Man.png')}
                style={styles.imageStyle}></Image>
            </View>

            <Text style={styles.textStyle}>Face Registeration</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/Woman.jpg')}
                style={styles.imageStyle}></Image>
            </View>

            <Text style={styles.textStyle}>Device Configuration</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/Settingicon.jpg')}
                style={styles.imageStyle}></Image>
            </View>

            <Text style={styles.textStyle}>Profile & Settings</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  homeStyle: {
    backgroundColor: 'orange',
  },
  homeText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 8,
  },

  inputTextStyles: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    ...Platform.select({
      ios: {
        shadowColor: '#6A0F91',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 6,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  imageStyle: {
    width: 40,
    height: 30,
    margin: 10,
    borderWidth: 1,
    borderColor: '#6A0F91',
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(52,52,52,0.2)',
    padding: 8,
    margin: 10,
    height: 40,
    width: 250,
    borderColor: '#6A0F91',
    borderWidth: 0.5,
    textAlign: 'center',
    borderRadius: 8,
    color: '#161717',
  },
  textStyle: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '800',
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
