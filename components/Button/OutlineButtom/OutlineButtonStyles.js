import { StyleSheet } from "react-native";
import string from "../../String/Strings";
import Colors from "../../../config/Colors.js/Colors";


const styles = StyleSheet.create({
    button: {
        marginTop: string.Size.Ten,
        backgroundColor: Colors.white,
        borderColor: Colors.botColor,
        backgroundColor: Colors.SmokyWhite,
        borderWidth: string.Size.Two,
        borderRadius: string.Size.Seventy,
        paddingHorizontal: string.Size.TwentyFive,
        paddingVertical: string.Size.Twelve,
    },
    buttonText: {
        fontFamily: string.Size.fontFamily.RobotoRegular,
        color: Colors.black,
        fontWeight: string.Size.Fontweight.SixHundred,
        fontSize: string.Size.Seventeen,
    },
    selectedButton: {
        marginTop: string.Size.Twelve,
        backgroundColor: Colors.botColor,
        borderColor: Colors.botColor,
        borderWidth: string.Size.Two,
        borderRadius: string.Size.Seventy,
        paddingHorizontal: string.Size.TwentyFive,
        paddingVertical: string.Size.Twelve
    },
});

export default styles;