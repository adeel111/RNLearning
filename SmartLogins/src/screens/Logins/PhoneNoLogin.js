import React, {useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const PhoneNoLogin = ({navigation}) => {
  const [number, setNumber] = useState(null);

  const handleNoLogin = async () => {
    const confirmation = await auth().signInWithPhoneNumber(number);
    console.log('Phone Number Response');
    console.log(confirmation);

    if (confirmation === null) {
      // If null, no SMS has been sent
      console.log(confirmation);
    } else {
      navigation.navigate('VerifyCode', {confirm: confirmation});
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.titleTextStyle}>Phone Number</Text>
        <View style={styles.inputViewContainer}>
          <TextInput
            placeholder={'Enter Phone Number'}
            inputType="default"
            capitalize={'none'}
            onChangeText={(text) => {
              setNumber(text);
            }}
            style={{padding: 10}}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleNoLogin()}
          style={styles.buttonContainer}>
          <Text style={styles.buttonTextStyles}>Login</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default PhoneNoLogin;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleTextStyle: {
    fontSize: 14,
    marginTop: 10,
    marginLeft: '8%',
    color: 'gray',
    alignSelf: 'flex-start',
  },
  inputViewContainer: {
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    width: '85%',
    flexDirection: 'row',
    borderColor: 'gray',
  },
  buttonContainer: {
    width: '85%',
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  buttonTextStyles: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },
});
