import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import styles from './OutlineButtonStyles';

const OutlineButton = ({ title, onPress, selected, style }) => {
  const buttonStyle = selected ? styles.selectedButton : styles.button;
  return (
    <TouchableOpacity style={[buttonStyle, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};



export default OutlineButton;
