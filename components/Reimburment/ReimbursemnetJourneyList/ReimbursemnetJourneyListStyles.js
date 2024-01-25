import { StyleSheet } from 'react-native';
import string from '../../String/Strings';
import Colors from '../../../config/Colors.js/Colors';


const styles = StyleSheet.create({
    main: {
        flex: string.Size.One,
        marginBottom: string.Size.Five
    },
    listContainer: {
        backgroundColor: Colors.bgBotColor,
        borderColor: Colors.botColor,
        borderWidth: string.Size.Two,
        borderRadius: string.Size.Ten,
        paddingHorizontal: string.Size.Fifteen,
        marginBottom: string.Size.Six,
        paddingVertical: string.Size.Ten,
    },
    Journeytext: {
        marginTop: string.Size.Five,
        color: Colors.Black,
    },
    destinationContainer: {
        flexDirection: string.Styles.Row,
        marginTop: string.Size.Five,
        justifyContent: string.Styles.SpaceBetween,
    },
    dateText: {
        justifyContent: string.Styles.FlexEnd,
        fontSize: string.Size.Fifteen,
        color: Colors.Black,
        alignItems: string.Styles.FlexEnd,
        marginEnd: string.Size.Fifteen,
    },
    statusButton: {
        flexWrap: string.Styles.Wrap,
        flexDirection: string.Styles.Row,
        justifyContent: string.Styles.FlexStart,
        columnGap: string.Size.Five,
        marginTop: string.Size.Five,
    },
    textTravel: {
        flexDirection: string.Styles.Row,
        justifyContent: string.Styles.SpaceBetween
    },
    userName: {
        fontSize: string.Size.Fifteen
    },
});


export default styles;