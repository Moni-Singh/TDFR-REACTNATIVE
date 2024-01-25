import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import AuthContext from './context/authContext';
import GreetingScreen from './screens/GreetingScreen/GreetingScreen';
import ReimbursementScreen from './screens/ReimbursementScreen/ReimbursementScreen';
import ReimbursemenetBillScreen from './screens/ReimbursementBillScreen/ReimbursemenetBillScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [authstatus, setauthstatus] = useState(false);
  const [loginResponse, setLoginResponse] = useState(null);

  const login = () => {
    AsyncStorage.getItem('loginData')
      .then(data => {
        console.log('Async data : ', data);
        if (data) {
          data = JSON.parse(data);
          setLoginResponse(data);
          setauthstatus(true);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const logOut = () => {
    setauthstatus(false);
  };

  useEffect(() => {
    if (!authstatus) {
      // AsyncStorage.getItem('loginData');
      // setLoginResponse(undefined);
    } else {
      AsyncStorage.getItem('loginData')
        .then(data => {
          console.log('Async data : ', data);
          if (data) {
            data = JSON.parse(data);
            setLoginResponse(data);
            login();
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [authstatus]);

  return (
    <AuthContext.Provider
      value={{
        status: authstatus,
        user: loginResponse,
        login: login,
        logOut: logOut,
      }}>
      <NavigationContainer>
        {!authstatus ? (
          <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator initialRouteName="GreetingScreen">
            <Stack.Screen name="GreetingScreen" component={GreetingScreen} />
            <Stack.Screen
              name="ReimbursementScreen"
              options={{
                headerTitle: 'Gbot - Travel Desk',
                headerTintColor: 'white',
              }}
              component={ReimbursementScreen}
            />
            <Stack.Screen
              name="ReimbursemenetBill"
              component={ReimbursemenetBillScreen}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
