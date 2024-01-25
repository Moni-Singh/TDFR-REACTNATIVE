import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import OutlineButton from '../../Button/OutlineButtom/OutlineButton';
import React, { useEffect, useState } from 'react';
import styles from './ReimbursemnetTypeStyle';


const ReimburmentType = ({ onTravelDeskPress, onOtherPress }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = buttonType => {
    if (buttonType === 'Travel Desk') {
      onTravelDeskPress();
    } else if (buttonType === 'Other') {
      onOtherPress();
    }
    setSelectedButton(buttonType);
  };
  return (
    <View style={styles.main}>
      <View style={styles.buttonContainer}>
        <OutlineButton
          title={'Travel Desk'}
          style={{ marginTop: 0 }}
          onPress={() => handleButtonPress('Travel Desk')}
          selected={selectedButton === 'Travel Desk'}
        />
        <OutlineButton
          title={'Other'}
          style={{ marginTop: 0 }}
          onPress={() => handleButtonPress('Other')}
          selected={selectedButton === 'Other'}
        />
      </View>
    </View>
  );
};


export default ReimburmentType;
