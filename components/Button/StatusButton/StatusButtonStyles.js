import { StyleSheet } from 'react-native';
import Colors from '../../../config/Colors.js/Colors';
import string from '../../String/Strings';



const styles = StyleSheet.create({
    statusButton: {
        backgroundColor: Colors.Charcoal,
        width: string.Size.Ten,
        height: string.Size.Ten,
        borderRadius: string.Size.TwentyFive,
        marginTop: string.Size.Five,
        justifyContent: string.Styles.Center,
        alignItems: string.Styles.Center,
        elevation: string.Size.Five,
    },
    selectedButton: {
        marginTop: string.Size.Fifteen,
        backgroundColor: Colors.botColor,
        borderColor: Colors.botColor,
        borderWidth: string.Size.Two,
        borderRadius: string.Size.Seventy,
        paddingHorizontal: string.Size.Twelve,
        paddingVertical: string.Size.Twelve,
    },
});

export default styles;
