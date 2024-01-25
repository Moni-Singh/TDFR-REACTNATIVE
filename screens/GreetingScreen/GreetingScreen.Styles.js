import { StyleSheet } from 'react-native';
import string from '../../components/String/Strings';
import Colors from '../../config/Colors.js/Colors';

const styles = StyleSheet.create({
    main: {
        flex: string.Size.One,
        marginStart: string.Size.Ten,
        backgroundColor: Colors.SmokyWhite,
    },
    greetingConatiner: {
        backgroundColor: Colors.DutchPink,
    },
    quotesContainer: {
        margin: string.Size.Fifteen,
        marginTop: string.Size.Fifteen,
    },

    buttonContainer: {
        flexWrap: string.Styles.Wrap,
        flexDirection: string.Styles.Row,
        justifyContent: string.Styles.FlexStart,
        marginTop: string.Size.Fifteen,
        columnGap: string.Size.Fifteen,
    },
    botImgae: {
        height: string.Size.Ninty,
        width: string.Size.HundredFifty,
        resizeMode: string.Styles.Contain,
        justifyContent: string.Styles.FlexEnd,
    },
    moreOptionContainer: {
        marginTop: string.Size.Twenty,
        justifyContent: string.Styles.Center,
        alignItems: string.Styles.Center,
        color: Colors.SmokyWhite,
        textAlign: string.Styles.Center,
    },
    imageEndQuotes: {
        width: string.Size.Thirty,
        height: string.Size.TwentyFive,
        resizeMode: string.Styles.Contain,
        justifyContent: string.Styles.FlexEnd,
        alignSelf: string.Styles.FlexEnd,
    },
    textName: {
        justifyContent: string.Styles.FlexEnd,
        textAlign: string.Styles.Right,
        marginEnd: string.Size.Sixty,
        color: Colors.cyanBlue,
    },
    textLorem: {
        color: Colors.cyanBlue,
        fontStyle: string.Styles.Italic,
        fontSize: string.Size.Sixteen
    },
    imageOpenQuotes: {
        width: string.Size.Thirty,
        height: string.Size.TwentyFive,
        resizeMode: string.Styles.Contain,
    },
    textMoreOption: {
        fontSize: string.Size.Sixteen,
        color: Colors.botColor
    },
    textRecommendation: {
        fontSize: string.Size.Sixteen,
        color: Colors.Black
    },
    imageBot: {
        position: string.Styles.Absolute,
        right: string.Size.One,
        top: string.Size.Twenty
    },
    textGreeting: {
        fontSize: string.Size.Fifteen,
        marginTop: string.Size.Ten,
    },
    greetingUser: {
        fontSize: string.Size.TwentyThree,
        fontFamily: string.Size.fontFamily.RobotoRegular,
        marginTop: string.Size.Five
    }
});

export default styles;