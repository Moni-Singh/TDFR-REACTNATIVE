import { StyleSheet } from 'react-native';
import Colors from '../../config/Colors.js/Colors';
import string from '../String/Strings';

const styles = StyleSheet.create({
    button: {
        marginTop: string.Size.Ten,
        backgroundColor: Colors.white,
        borderColor: Colors.botColor,
        backgroundColor: Colors.white,
        borderWidth: string.Size.Two,
        borderRadius: string.Size.Seventy,
        paddingHorizontal: string.Size.Fifteen,
        paddingVertical: string.Size.Five,
    },
    buttonText: {
        fontFamily: string.Size.fontFamily.RobotoRegular,
        color: Colors.Black,
        fontWeight: string.Size.Fontweight.SixHundred,
        fontSize: string.Size.Seventeen,
    },
    selectedButton: {
        marginTop: string.Size.Ten,
        backgroundColor: Colors.white,
        borderColor: Colors.botColor,
        backgroundColor: Colors.botColor,
        borderWidth: string.Size.Two,
        borderRadius: string.Size.Seventy,
        paddingHorizontal: string.Size.Fifteen,
        paddingVertical: string.Size.Five,
    },
});

export default styles;