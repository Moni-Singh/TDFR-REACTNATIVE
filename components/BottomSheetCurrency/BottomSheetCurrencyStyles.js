import { StyleSheet } from 'react-native';
import Colors from '../../config/Colors.js/Colors';
import string from '../String/Strings';

const styles = StyleSheet.create({
    mainContainer: {
        flex:string.Size.One ,
        height: string.Percent.Hundred,
        alignItems: string.Styles.FlexEnd,
        flexDirection: string.Styles.Column
    },
    listContainer: {
        backgroundColor: Colors.white,
        borderTopLeftRadius: string.Size.Ten,
        borderTopRightRadius: string.Size.Ten,
        borderWidth: string.Size.Two,
        borderColor: Colors.botColor,
        width: string.Percent.Fifty,
        height: string.Percent.Fourty,
        position:string.Styles.Absolute,
        bottom: 0

    },
    option: {
        padding: string.Size.Five,
        marginStart: string.Size.Ten,
        borderBottomWidth:string.Size.One,
        borderColor: '#ccc',
    },

});

export default styles;