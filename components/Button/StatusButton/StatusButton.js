import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './StatusButtonStyles';

const StatusButton = ({ icon, iconSize, buttonColor }) => {
  return (
    <View style={[styles.statusButton, { backgroundColor: buttonColor }]} >

    </View>
  );
};

export default StatusButton;
