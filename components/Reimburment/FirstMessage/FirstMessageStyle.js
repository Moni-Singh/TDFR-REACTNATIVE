import { StyleSheet } from 'react-native';
import Colors from '../../../config/Colors.js/Colors';
import string from '../../String/Strings';


const styles = StyleSheet.create({
    container: {
        flex: string.Size.One,
        width: string.Percent.Hundred,
        flexDirection: string.Styles.Column,
        backgroundColor: Colors.SmokyWhite,
    },
    chatContainer: {
        marginStart: string.Size.Ten,
        marginTop: string.Size.Ten
    },

    card: {
        backgroundColor: Colors.white,
        borderRadius: string.Size.Thirty,
        padding: string.Size.Ten,
        elevation: string.Size.Three,
        shadowColor: Colors.black,
        shadowOpacity: string.Size.ZeroPointTwo,
        shadowRadius: string.Size.Two,
    },
    chatMessage: {
        justifyContent: string.Styles.Center,
        color: Colors.black,
        fontSize: string.Size.Fifteen
    },
    imageContainer: {
        flex: string.Size.One,
        justifyContent: string.Styles.FlexStart,
        alignItems: string.Styles.FlexStart,
    },
    image: {
        width: string.Size.Sixty,
        height: string.Size.Fourty,
        resizeMode: string.Styles.Contain,
    },
});

export default styles;