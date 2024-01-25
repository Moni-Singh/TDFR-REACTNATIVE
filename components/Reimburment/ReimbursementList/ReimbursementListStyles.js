import { StyleSheet } from "react-native";
import Colors from "../../../config/Colors.js/Colors";
import string from "../../String/Strings";

const styles = StyleSheet.create({
    main: {
        flex: string.Size.One,
    },
    listContainer: {
        marginStart: string.Size.Twenty,
        marginEnd: string.Size.Five,
    },
    listdate: {
        flexWrap: string.Styles.Wrap,
        flexDirection: string.Styles.Row,
    },
    statusButton: {
        flexWrap: string.Styles.Wrap,
        flexDirection: string.Styles.Row,
        justifyContent: string.Styles.FlexStart,
        columnGap: string.Size.Five,
        marginTop: string.Size.Five,
    },
    textDate: {
        flex: string.Size.One,
        textAlign: string.Styles.Right,
        justifyContent: string.Styles.FlexEnd,
        marginEnd: string.Size.Ten,
    },
    bill_divider: {
        borderBottomColor: Colors.botColor,
        borderBottomWidth: string.Size.Four,
        marginStart: string.Size.Ten,
        marginEnd: string.Size.Four,
        marginTop: string.Size.Ten,
        marginBottom: string.Size.Ten,
    }
});

export default styles;