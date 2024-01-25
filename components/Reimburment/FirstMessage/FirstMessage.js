import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Button, FlatList, Text, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './FirstMessageStyle';

const FirstMessage = ({ botMessage }) => {


  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        <View style={styles.card}>
          <Text style={styles.chatMessage}>{botMessage}
            Hey Moni! Please select the reimbursementType?

          </Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          Image
          source={require('../../../images/chatbotmsgimg.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default FirstMessage;
