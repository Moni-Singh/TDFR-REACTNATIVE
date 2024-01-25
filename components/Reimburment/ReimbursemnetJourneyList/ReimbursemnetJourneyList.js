import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useContext } from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import StatusButton from '../../Button/StatusButton/StatusButton';
import { GetWithAuth } from '../../../config/Api/Api';
import ApiConstants from '../../../config/Api/apiConstants';
import AuthContext from '../../../context/authContext';
import styles from './ReimbursemnetJourneyListStyles';
import Colors from '../../../config/Colors.js/Colors';
import string from '../../String/Strings';

const ReimbursementJourneyList = ({ onClickJourneyList }) => {
  const [journeyList, setJourneyList] = useState([]);
  const auth = useContext(AuthContext);

  useEffect(() => {
    getAPIData();
  }, []);

  const getAPIData = () => {
    GetWithAuth(ApiConstants.BookingListRequests + auth.user.id, auth.user.token)
      .then(response => {
        console.log('TravelListData:', response.data);
        setJourneyList(response.data.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const renderJourneyItems = ({ item }) => {
    var status = item.status;
    const createdAtDate = new Date(item.createdAt);
    const formattedDate = createdAtDate.toISOString().slice(0, 10);
    const role = item.user.role
    return (
      <View style={styles.listContainer}>

        <View style={styles.textTravel}>
          <Text>Travel Request</Text>
          <Text style={styles.dateText}>
            {formattedDate}
          </Text>
        </View>

        <View style={styles.destinationContainer}>
          <Text style={styles.userName}>{item.user.name}</Text>

          <View style={{ marginEnd: 10 }}>
            <TouchableOpacity
              onPress={() => onClickJourneyList(item._id)}>
              <Icon name=
                {string.Icons_Name.ArrowClick_icon}
                size={string.Icons_Size.Thirty}
                color={Colors.Black} />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.Journeytext}>
          {item.tripdetails[0].sourcelocation} - {item.tripdetails[0].destinationlocation}
        </Text>


        <View style={styles.statusButton}>
          <StatusButton buttonColor={status >= 0 ? Colors.botColor : Colors.Charcoal} />
          <StatusButton buttonColor={status >= 1 ? Colors.botColor : Colors.Charcoal} />
          <StatusButton buttonColor={status >= 2 ? Colors.botColor : Colors.Charcoal} />
          <StatusButton buttonColor={status >= 3 ? Colors.botColor : Colors.Charcoal} />
          <StatusButton buttonColor={status >= 4 ? Colors.botColor : Colors.Charcoal} />
          <StatusButton buttonColor={status >= 5 ? Colors.botColor : Colors.Charcoal} />

          <Text style={{ marginStart: 10 }}>InProgress...</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.main}>
      <FlatList
        data={journeyList}
        renderItem={renderJourneyItems}
      />
    </View>
  );
};

export default ReimbursementJourneyList;
