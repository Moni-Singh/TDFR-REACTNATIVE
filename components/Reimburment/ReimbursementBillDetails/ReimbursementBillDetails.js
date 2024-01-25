import { useState, useEffect } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome6';
import BottomSheetCurrency from '../../BottomSheetCurrency/BottomSheetCurrency';
import CustomButton from '../../Button/CustomButton/CustomButton';
import string from '../../String/Strings';
import Colors from '../../../config/Colors.js/Colors';
import styles from './ReimbursementBillDetailsStyle';





const ReimbursementBillDetails = ({ onClickImage, onClickSendBill ,onPressSubmitDone}) => {

  const [showDescription, setShowDescription] = useState(false);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [currencyData, setCurrencyData] = useState([]);
  const [description, setDescription] = useState('');
  const [billAmount, setBillAmount] = useState('');
  const [currencySymbol, setCurrencySymbol] = useState('');
  const [isImageDialogVisible, setImageDialogVisible] = useState(false);



  useEffect(() => {

  }, []);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };

  const handleImageDialog = (selectedImages) => {

    console.log('Selected images:', selectedImages);
    setImageDialogVisible(false);
  }

  const handleOptionSelect = (currency) => {
    console.log("currencysymbol:", currency)
    setCurrencyData(currency);
    setCurrencySymbol(currency.symbolcode);
    toggleBottomSheet();
  };


  return (
    <View style={styles.mainContainer}>
      <View style={styles.detailsConatiner}>

        {showDescription && (
          <TextInput
            style={styles.inputdescription}
            placeholder={string.Placeholder.Add_Description}
            onChangeText={(text) => setDescription(text)}
          />
        )}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputAmount}
            placeholder={string.Placeholder.EnterAmount}
            keyboardType={string.BackHandler.Number_KeyboardType}
            onChangeText={(text) => setBillAmount(text)}
          />
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => setShowDescription(!showDescription)}>
              <Icon name={string.Icons_Name.Description_icon} size={string.Icons_Size.Twenty} color={Colors.botColor} />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleBottomSheet}>
              <Icon name={string.Icons_Name.Currency_icon} size={string.Icons_Size.Twenty} color={Colors.botColor} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onClickImage} >
              <Icon name={string.Icons_Name.Gallery_icon} size={string.Icons_Size.Twenty} color={Colors.botColor} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onClickSendBill(description, billAmount, currencySymbol)}>
              <Icon name={string.Icons_Name.SendBill_icon} size={string.Icons_Size.Twenty} color={Colors.botColor} />
            </TouchableOpacity>

          </View>
          <Modal
            isVisible={isBottomSheetVisible}

            onBackdropPress={toggleBottomSheet}
            style={styles.modal}
          >
            <BottomSheetCurrency
              options={currencyData}
              onSelectOption={(currency) => {
                setCurrencySymbol(currency);
                toggleBottomSheet();
              }}
              onSelectOption={handleOptionSelect}
              onCancel={toggleBottomSheet}
            />
          </Modal>
        </View>

        <CustomButton
          title={string.Text.ReimbursementBill_Done}
          color={Colors.botColor}
          titleColor={Colors.black}
          onPress={onPressSubmitDone}

        />
      </View>
    </View>
  );
};



export default ReimbursementBillDetails;
