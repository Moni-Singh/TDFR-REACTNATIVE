import { StyleSheet } from 'react-native';
import Colors from '../../../config/Colors.js/Colors';
import string from '../../String/Strings';


const styles = StyleSheet.create({
    mainContainer: {
        flex: string.Size.One,
        flexDirection: string.Styles.Row,
        alignItems: string.Styles.FlexEnd,
        justifyContent: string.Styles.FlexEnd,

    },

    billContainer: {
        borderWidth: string.Size.Four,
        width: string.Size.TwoHundredFifty,
        borderColor: Colors.botColor,
        marginBottom: string.Size.Eight,
        borderTopRightRadius: string.Size.Ten,
        borderTopLeftRadius: string.Size.Ten

    },
    billImgae: {
        height: string.Size.HundredFifty,
        width: string.Percent.Hundred,
        borderRadius: 5

    },
    billsDetails: {
        marginStart: string.Size.Twenty,
        padding: string.Size.Ten,

    },
    billText: {
        marginStart: string.Size.Five
    },
    currencyText:
    {
        marginStart: string.Size.Five,
        color: Colors.botColor

    }
});

export default styles;
