import { StyleSheet } from 'react-native';
import string from '../../String/Strings';
import Colors from '../../../config/Colors.js/Colors';

const styles = StyleSheet.create({
    mainContainer: {
        height: string.Size.Eighty,
        flexDirection: string.Styles.Column,
        elevation: string.Size.Five,
        padding: string.Size.Eight,
        backgroundColor: Colors.bgBotColor,
    },
    listConatiner: {

        flex: string.Size.One
    },
    itemSeperator: {
        margin: string.Size.Five
    },


});


export default styles;