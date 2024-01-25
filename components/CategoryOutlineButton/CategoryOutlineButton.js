import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import styles from './CategoryOutlineButtonStyles';

const CategoryOutlineButton = ({ title, onPress, selected, style }) => {
  return (
    <TouchableOpacity
      style={[selected ? styles.selectedButton : styles.button]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryOutlineButton;