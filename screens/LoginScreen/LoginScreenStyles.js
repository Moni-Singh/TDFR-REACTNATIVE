import { StyleSheet, windowHeight, } from 'react-native';

import string from '../../components/String/Strings';
import Colors from '../../config/Colors.js/Colors';

const styles = StyleSheet.create({
    main: {
        flex: string.Size.One,
    },
    mainContainer: {
        flex: string.Size.Two,
        padding: string.Size.Sixteen,
    },
    header: {
        fontSize: string.Size.FiftyOne,
        fontWeight: string.Size.Fontweight.SixHundred,
        color: Colors.black,
        justifyContent: string.Styles.Center,
        textAlign: string.Styles.Center,
    },
    buttonContainer: {
        marginTop: string.Size.Ten,
    },
    logo: {
        width: string.Size.HundredEighty,
        height: string.Size.Fifty,
        resizeMode: string.Styles.Contain,
        marginTop: string.Size.Ten,
        justifyContent: string.Styles.Center,
    },
    imageContainer: {
        flex: string.Size.One,
        borderBottomLeftRadius: string.Size.HundredFifty,
        width: string.Percent.Hundred,
        height: string.Percent.Fourty,
        backgroundColor: Colors.botColor,
        padding: string.Size.Seventy,
        justifyContent: string.Styles.Center,
        alignItems: string.Styles.Center,
        marginBottom: string.Size.Twenty,
    },
    inputTextContainer:
    {
        display: string.Styles.Flex,
        flex: string.Size.One,
        minHeight: windowHeight,
        width: string.Percent.Hundred,
        marginTop: string.Size.TwentyFive,
        flexDirection: string.Styles.Column,
        justifyContent: string.Styles.Center,
        alignSelf: string.Styles.Center,
        alignContent: string.Styles.Center,
        alignItems: string.Styles.Center,
    },
    imageText: {
        marginTop: string.Size.Ten,
        fontWeight: string.Size.Fontweight.SixHundred
    }
});

export default styles;