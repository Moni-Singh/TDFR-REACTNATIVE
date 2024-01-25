import { StyleSheet, windowHeight, } from 'react-native';
import Colors from '../../../config/Colors.js/Colors';
import string from '../../String/Strings';


const styles = StyleSheet.create({
    mainContainer: {
        flex: string.Size.One,
    },
    detailsConatiner: {
        margin: string.Size.Ten,
    },
    inputdescription: {
        borderWidth: string.Size.Two,
        borderColor: Colors.botColor,
        marginBottom: string.Size.Three,
        borderRadius: string.Size.Ten,
        fontSize: string.Size.Seventeen,
        height: string.Size.Fourty,
    },
    inputContainer: {
        flexDirection: string.Styles.Row,
        alignItems: string.Styles.Center,
        borderWidth: string.Size.Two,
        borderColor: Colors.botColor,
        borderRadius: string.Size.Ten,
        fontSize: string.Size.Seventeen,
        height: string.Size.FourtyFive
    },
    inputEnterAmount: {
        borderWidth: string.Size.Two,
        borderColor: Colors.botColor,
        borderRadius: string.Size.Ten,
        height: string.Size.Twenty,
    },
    inputAmount: {
        flex: string.Size.One,
        paddingLeft: string.Size.Ten,
        fontSize: string.Size.Twenty,
    },
    iconContainer: {
        flexDirection: string.Styles.Row,
        columnGap: string.Size.Ten,
        marginEnd: string.Size.Ten
    },
    modal: {
        justifyContent: string.Styles.FlexEnd,
        margin: 0,
    },
});

export default styles;