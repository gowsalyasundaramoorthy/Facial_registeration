import {Text, View, StyleSheet, Image} from 'react-native';

export default function Header({navigation}) {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/Clubtrackicon.png')}
        style={styles.leftImageStyle}></Image>
      <Text style={styles.headerText}>Face Registration</Text>

      <Image
        source={require('../assets/homeicon.png')}
        style={styles.rightImageStyle}></Image>
    </View>
  );
}
const styles = StyleSheet.create({
  leftImageStyle: {
    width: 20,
    height: 30,
    // margin: 40,
    marginLeft: 10,
    marginRight: 10,
  },
  header: {
    width: '100%',
    // height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    tintColor: 'white',
    backgroundColor: '#6A0F91',
    height: 60,
  },
  textStyle: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 1,
    // margin: 2,
  },
  rightImageStyle: {
    width: 20,
    height: 20,
    margin: 40,
  },
});
