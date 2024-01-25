import { StyleSheet } from 'react-native';
import Colors from '../../../config/Colors.js/Colors';
import string from '../../String/Strings';


const styles = StyleSheet.create({
    main: {
        flex: string.Size.One,
        justifyContent: string.Styles.SpaceBetween,
        alignItems: string.Styles.Center,
        backgroundColor: Colors.bgBotColor,
    },
    buttonContainer: {
        flexWrap: string.Styles.Wrap,
        flexDirection: string.Styles.Row,
        justifyContent: string.Styles.FlexStart,
        columnGap: 55,
    },
});
export default styles;