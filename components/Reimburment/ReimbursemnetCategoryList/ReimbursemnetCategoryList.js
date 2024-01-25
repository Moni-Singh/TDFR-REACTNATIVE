import axios from 'axios';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CategoryOutlineButton from '../../CategoryOutlineButton/CategoryOutlineButton';
import ApiConstants from '../../../config/Api/apiConstants';
import { GetCall } from '../../../config/Api/Api';
import styles from './ReimbursemnetCatgoryListStyles';
import Colors from '../../../config/Colors.js/Colors';

const ReimbursemnetCategoryList = ({ selectedItems, onCategoryClick, categoryType, categoryId }) => {
  const [categoryList, setCategoryList] = useState([]);

  const getCategoryList = () => {
    GetCall(ApiConstants.category + "?categoryType=" + categoryType)
      .then(response => {
        console.log('categoryList Data:', response.data.data);
        setCategoryList(response.data.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

  };

  useEffect(() => {
    getCategoryList();
  }, []);

  const renderItems = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <CategoryOutlineButton
          onPress={() => {
            onCategoryClick(item.reimbursementCategory, item._id);

          }}

          title={item.reimbursementCategory}
          selected={item.reimbursementCategory === selectedItems}
        />
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={Colors.Black}>Please select category</Text>
      <View style={styles.listConatiner}>
        <FlatList


          data={categoryList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={<View style={styles.itemSeperator} />}
          renderItem={renderItems}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};


export default ReimbursemnetCategoryList;
