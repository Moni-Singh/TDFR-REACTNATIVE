import { StyleSheet } from "react-native";
import Colors from "../../../config/Colors.js/Colors";
import string from "../../String/Strings";


const styles = StyleSheet.create({
    button: {
        height: string.Size.Fourty,
        alignItems: string.Styles.Center,
        alignContent: string.Styles.Center,
        flexDirection: string.Styles.Column,
        justifyContent: string.Styles.Center,
        marginTop: string.Size.Fifteen,
        backgroundColor: Colors.botColor,
        borderRadius: string.Size.Five
    }

});

export default styles;