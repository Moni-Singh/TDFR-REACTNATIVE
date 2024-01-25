import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import { GetWithAuth, PostWithAuth } from '../../../config/Api/Api';
import ApiConstants from '../../../config/Api/apiConstants';
import styles from './ReimbursemnetAccountBillStyles';
import Colors from '../../../config/Colors.js/Colors';
import { getNewReimbursmentItem } from '../../../data/ReimbursmentItem';


const ReimbursemnetAcocuntBill = ({ item }) => {
  console.log("ReimbursementBillAccount:", item);
  const imageUrl = 'https://source.unsplash.com/user/c_v_r/1900x800 '

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={item.reimbursementBill}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.billContainer}>
            <View>
              <Image
                resizeMode="cover"
                source={{ uri: imageUrl }}
                style={styles.billImgae}
              />
            </View>

            <View style={styles.billDetails}>
              <Text style={styles.billText}>Description: {item.userDescription}</Text>
              <Text style={styles.billText}>CategoryItem: {item.reimbursementBillType}</Text>
              <Text style={styles.currencyText}>Currency: {String.fromCharCode(parseInt(item.currency.substring(2), 10))} {item.amount}</Text>
              <Text style={styles.billText}>Date: {item.timestamps}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ReimbursemnetAcocuntBill;