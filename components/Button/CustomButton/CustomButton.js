import { Text, TouchableOpacity } from 'react-native'
import styles from './CustomButtonStyles';

const CustomButton = ({ onPress, title, color, titleColor, buttonStyle }) => {

    return (
        <TouchableOpacity style={[styles.button, {
            backgroundColor: color
        }, buttonStyle]} onPress={onPress}>
            <Text style={[{ color: titleColor, textAlign: 'center', fontSize: 18, width: '100%' }]}>{title}</Text>
        </TouchableOpacity>
    );
}

export default CustomButton;