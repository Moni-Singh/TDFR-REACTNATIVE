import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import AuthContext from '../../context/authContext';
import ApiConstants from '../../config/Api/apiConstants';
import { GetWithAuth } from '../../config/Api/Api';
import ReimbursementList from '../../components/Reimburment/ReimbursementList/ReimbursementList';
import Colors from '../../config/Colors.js/Colors';
import string from '../../components/String/Strings';

const ReimbursemenetBillScreen = () => {
  const [data, setData] = useState();
  const navigation = useNavigation();
  const [reimbursementList, setReimbursementList] = useState([]);
  const auth = useContext(AuthContext);


  const apiUrl = 'http://localhost:4000/api';
  const userId = auth.user.id

  const getReimbursementDetails = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/reimbursement/GetReimbursementList`,
        { userId },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setData(response.data.data);
      console.log('API Response:', response.data);

      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  useEffect(() => {
    getReimbursementDetails();

    navigation.setOptions({
      headerShown: true,
      title: 'GBOT',
      headerTitleStyle: {
        fontSize: 25,
        color: Colors.white,
      },
      headerStyle: {
        backgroundColor: Colors.botColor,
      },
    });
  }, []);

  const renderItems = ({ item }) => {
    console.log('items:', item);
    return (
      <View>
        <ReimbursementList data={item} />
      </View>
    );
  };
  return (
    <View >
      {console.log("Datarfg:-", data)}
      <FlatList
        data={data}
        renderItem={renderItems}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};


export default ReimbursemenetBillScreen;
