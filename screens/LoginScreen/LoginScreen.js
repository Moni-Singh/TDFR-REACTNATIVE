import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';


import styles from './LoginScreenStyles';
import CustomButton from '../../components/Button/CustomButton/CustomButton';
import InputText from '../../components/InputText/InputText';
import AuthContext from '../../context/authContext';
import Colors from '../../config/Colors.js/Colors';
import string from '../../components/String/Strings';


const LoginScreen = () => {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState('moni.singh@thegatewaycorp.co.in');
  const [password, setPassword] = useState('Traveldesk@1234');
  const [isLoading, setIsLoading] = useState(false);

  const login = () => {
    auth.login();
  };

  const auth = useContext(AuthContext);
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const onChangeNameHandler = userEmail => {
    setUserEmail(userEmail);
  };

  const onChangePasswordHandler = password => {
    setPassword(password);
  };

  const onSubmitFormHandler = async () => {
    if (userEmail.trim() === '' || password.trim() === '') {
      Alert.alert('Validation Error', 'userEmail and password are required.');
      return;
    }
    setIsLoading(true);

    axios
      .post(
        'http://localhost:4000/api/users/login',
        {
          Email: userEmail,
          password: password,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        },
      )
      .then(response => {
        console.log('ResponseData:', JSON.stringify(response.data));
        setIsLoading(false);
        AsyncStorage.setItem('loginData', JSON.stringify(response.data), () => {
          login();
        });
      })
      .catch(E => {
        console.log(E);
        setIsLoading(false);
      });
  };
  return (
    <ScrollView style={styles.main}>
      <StatusBar backgroundColor={Colors.botColor} barStyle={'dark-content'} />
      <View style={styles.imageContainer}>
        <Image source={require('../../images/Gateway.png')} style={styles.logo} />
        <Text style={styles.imageText}>
          {string.Text.software_Engineering}
        </Text>
      </View>
      <View style={styles.mainContainer}>
        <View
          style={styles.inputTextContainer}>
          <View>
            <Text style={styles.header}>{string.Text.Gbot}</Text>

            <InputText
              iconColor={'#000000'}
              iconName={string.Icons_Name.Mail_icon}
              placeholder="Username"
              onChangeText={onChangeNameHandler}
            />
            <InputText
              secureTextEntry
              iconName={string.Icons_Name.Password_icon}
              placeholder="Password"
              onChangeText={onChangePasswordHandler}
            />
            <CustomButton
              color={Colors.botColor}
              onPress={onSubmitFormHandler}
              titleColor={Colors.black}
              title={string.Button.btnLogin}
            />

            {isLoading ? <ActivityIndicator size={30} /> : null}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};



export default LoginScreen;
