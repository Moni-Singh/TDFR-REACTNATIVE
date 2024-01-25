import { StyleSheet } from "react-native";
import string from "../String/Strings";


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: string.Styles.Row,
        alignItems: string.Styles.Center,
        borderWidth: string.Size.One,
        borderRadius: string.Size.Five,
        marginTop: string.Size.Twenty,
        width: string.Percent.Hundred
    },
    inputIcon: {
        paddingHorizontal: string.Size.Ten,
    },
    input: {
        flex: string.Size.One,
        height: string.Size.Fourty,
        padding: string.Size.Ten,
    },

});

export default styles;