import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import StatusButton from '../../Button/StatusButton/StatusButton';
import styles from './ReimbursementListStyles';
import Colors from '../../../config/Colors.js/Colors';
import Icon from 'react-native-vector-icons/FontAwesome6';
import string from '../../String/Strings';
import AuthContext from '../../../context/authContext';
import { useEffect, useContext } from 'react';

const ReimbursementList = ({ data }) => {
  const auth = useContext(AuthContext);
  console.log('Booking Type:', data);
  const username = auth.user.name
  console.log('fgjhv:', username)
  const applicationStatus = data.applicationStatus;
  let status = undefined;
  if (applicationStatus === 'NEW') {
    status = 0;
  }
  if (applicationStatus === 'REJECTED') {
    status = 1;
  }
  if (applicationStatus === 'INPROGRESS') {
    status = 2;
  }
  if (applicationStatus === 'WAITING') {
    status = 3;
  }
  if (applicationStatus === 'COMPLETED') {
    status = 4;
  }


  const createdAtDate = new Date(data.updatedAt);
  const formattedDate = createdAtDate.toISOString().slice(0, 10);

  return (
    <View style={styles.main}>
      <View style={styles.listContainer}>
        <View style={styles.listdate}>
          <Text>{data.reimbursementType}</Text>
          <Text style={styles.textDate}>{formattedDate}</Text>
        </View>
        <View style={{ marginEnd: 10 }}>

        </View>
        <Text>{username}</Text>


        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>Request for Reimbursement for Travel</Text>
          <TouchableOpacity style={{ marginLeft: 'auto' }}>
            <Icon
              name={string.Icons_Name.ArrowClick_icon}
              size={string.Icons_Size.Thirty}
              color={Colors.Black}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.statusButton}>

          <StatusButton buttonColor={status >= 0 ? Colors.botColor : Colors.Charcoal} />
          <StatusButton buttonColor={status >= 1 ? Colors.botColor : Colors.Charcoal} />
          <StatusButton buttonColor={status >= 2 ? Colors.botColor : Colors.Charcoal} />
          <StatusButton buttonColor={status >= 3 ? Colors.botColor : Colors.Charcoal} />



          <Text style={{ marginStart: 10 }}>{applicationStatus}</Text>
        </View>
      </View>
      <View
        style={styles.bill_divider}
      />
    </View>
  );
};



export default ReimbursementList;
