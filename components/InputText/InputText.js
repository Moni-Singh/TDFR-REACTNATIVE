import React from 'react';
import { View, StyleSheet, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './InputTextStyles';

const InputText = ({ iconName, placeholder, keyboardType, iconColor, value, onChangeText, secureTextEntry }) => {

    return (
        <View style={styles.inputContainer}>
            <View style={styles.inputIcon}>
                <Icon name={iconName} size={20} color='#000' />
            </View>
            <TextInput
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                style={styles.input}
                placeholder={placeholder}
            />
        </View>
    )
};
export default InputText;