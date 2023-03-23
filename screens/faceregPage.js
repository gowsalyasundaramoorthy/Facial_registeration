import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';

export default function FaceRegPage({navigation, route}) {
  const [inputs, setInputs] = useState({
    Id: '',
    Code: '',
    Name: '',
    Role: '',
    Category: '',
  });

  const cameraHandler = () => {
    navigation.navigate('CameraPage');
  };

  const navigateHomeHandler = () => {
    navigation.navigate('HomePage');
  };

  const uri = route.params?.uri;
  console.log(uri);

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const submitHandler = () => {
    console.log(inputs.Name);

    axios
      .post('https://jsonplaceholder.typicode.com/posts/1', {
        Id: inputs.Id,
        Code: inputs.Code,
        Name: inputs.Name,
        Role: inputs.Role,
        Category: inputs.Category,
      })
      .then(function (response) {
        console.log('success');
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log('failure');
        alert(error.message);
      });
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require('../assets/Background.jpg')}
      style={styles.backgroundImage}
      imageStyle={{opacity: 0.3}}>
      <View style={styles.homeStyle}>
        <TouchableOpacity onPress={navigateHomeHandler}>
          <Image
            source={require('../assets/homeicon.png')}
            style={styles.homeIconStyle}></Image>
        </TouchableOpacity>
        <Text style={styles.homeText}>Face Registration</Text>
      </View>

      <View style={styles.camContainer}>
        <Image style={styles.cameraLoadStyle} source={{uri: uri}}></Image>
        <TouchableOpacity onPress={cameraHandler} style={styles.cameraStyle}>
          <Image source={require('../assets/CameraIcon.png')}></Image>
        </TouchableOpacity>
      </View>

      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.textStyle}>Id</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={text => handleOnchange(text, 'Id')}></TextInput>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.textStyle}>Code</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={text => handleOnchange(text, 'Code')}></TextInput>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.textStyle}>Name</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={text => handleOnchange(text, 'Name')}></TextInput>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.textStyle}>Role</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={text => handleOnchange(text, 'Role')}></TextInput>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.textStyle}>Category</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={text => handleOnchange(text, 'Category')}></TextInput>
        </View>

        <TouchableOpacity onPress={submitHandler} style={styles.buttonStyle}>
          <Text style={styles.submitStyles}>Submit</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  homeStyle: {
    backgroundColor: 'orange',
    flexDirection: 'row',
  },
  homeIconStyle: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    margin: 6,
  },
  homeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    margin: 6,
    paddingLeft: 50,
  },
  textStyle: {
    flex: 1,
    margin: 6,
    color: '#6A0F91',
    textAlign: 'left',
    padding: 10,
    fontSize: 15,
  },
  inputStyle: {
    flex: 3,
    borderColor: '#6A0F91',
    borderWidth: 1,
    padding: 8,
    margin: 4,
    // alignSelf: "left",
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cameraStyle: {
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cameraLoadStyle: {
    flexDirection: 'row',
    width: 120,
    height: 120,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#6A0F91',
    padding: 8,
    margin: 4,
  },

  photoStyle: {
    width: 70,
    height: 90,
  },
  buttonStyle: {
    backgroundColor: '#6A0F91',
    padding: 10,
    margin: 'auto',
    height: 40,
    width: 120,
    borderRadius: 8,
    alignSelf: 'center',
  },
  submitStyles: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
