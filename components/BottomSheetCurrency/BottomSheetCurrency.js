
import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import currencyData from '../../raw/currency';
import styles from './BottomSheetCurrencyStyles';

const BottomSheetCurrency = ({ options, onSelectOption }) => {
    return (

        <View style={styles.mainContainer}>
            <View style={styles.listContainer}>
                <FlatList
                    data={currencyData}
                    keyExtractor={(item) => item.abbreviation}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.option}
                            onPress={() => onSelectOption(item)}>
                            <Text>{item.label}</Text>
                            <Text>{String.fromCharCode(parseInt(item.symbolcode.substring(2), 10))}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
};



export default BottomSheetCurrency;
