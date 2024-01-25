import { StyleSheet } from "react-native";
import Colors from '../../config/Colors.js/Colors';
import string from '../String/Strings';

const styles = StyleSheet.create({
    container: {
    },
    centeredView: {
        flex: string.Size.One,
        justifyContent: string.Styles.Center,
        alignItems: string.Styles.Center,
    },
    modelView: {
        backgroundColor: Colors.white,
        padding: string.Size.Fifty,
        borderRadius: string.Size.Five,
        elevation: string.Size.Five
    },
    optionContainer: {
        alignItems: string.Styles.FlexStart,
    },
    modelText: {
        padding: string.Size.Five,
        fontSize: string.Size.Twenty,
        textAlign: string.Styles.Left,
    }

});

export default styles;