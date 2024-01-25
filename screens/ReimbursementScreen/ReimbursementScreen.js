import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import FirstMessage from '../../components/Reimburment/FirstMessage/FirstMessage';
import ReimbursemnetAcocuntBill from '../../components/Reimburment/ReimbursemnetAccountBill/ReimbursemnetAcocuntBill';
import ReimbursemnetCategoryList from '../../components/Reimburment/ReimbursemnetCategoryList/ReimbursemnetCategoryList';
import ReimbursemnetJourneyList from '../../components/Reimburment/ReimbursemnetJourneyList/ReimbursemnetJourneyList';
import ReimburmentType from '../../components/Reimburment/ReimbursemnetType/ReimbursemnetType';
import { getNewReimbursmentItem, LayoutType } from '../../data/ReimbursmentItem';
import DailogboxImage from '../../components/DailogboxImage/DailogboxImage';
import ReimbursementBillDetails from '../../components/Reimburment/ReimbursementBillDetails/ReimbursementBillDetails';
import chatBotMessage from '../../raw/traveldeskMsg';
import currencyData from '../../raw/currency';
import axios from 'axios';
import AuthContext from '../../context/authContext';
import ApiConstants from '../../config/Api/apiConstants';
import { MultipartPost } from '../../config/Api/Api';

const ReimbursementScreen = () => {
  const navigation = useNavigation();
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [list, setList] = useState([]);
  const [showCategoryLayout, setShowCategoryLayout] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showReimbursemnetForm, setShowReimbursemnetForm] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [billDescription, setBillDescription] = useState('');
  const [billAmount, setBillAmount] = useState('');
  const [currencySymbol, setCurrencySymbol] = useState('');
  const [selectedGalleryImage, setSelectedGalleryImage] = useState([]);
  const [itemId, setSelectedItemId] = useState(null);
  const [categoryID, setCategoryId] = useState(null);
  const [reimbursementId, setReimbursemnetBillId] = useState(null);

  const auth = useContext(AuthContext);

  const getMessageById = (id) => {
    const messageData = chatBotMessage.travelDeskChatBot.find(item => item.id === id);
    return messageData ? messageData.message : 'Message not found';
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            columnGap: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ReimbursemenetBill')}>
            <Icon name={'bars'} size={20} color="white" />
          </TouchableOpacity>
        </View>
      ),
      headerShown: true,
      title: 'ReImbursment',
      headerTitleStyle: {
        fontSize: 25,
        color: 'white',
      },
      headerStyle: {
        backgroundColor: '#FBB03B',
      },
    });


    var botMessage = getNewReimbursmentItem();
    botMessage.viewType = LayoutType.LAYOUT_FIRSTBOT_MESSAGE;

    var reimbursemnetType = getNewReimbursmentItem();
    reimbursemnetType.viewType = LayoutType.LAYOUT_REIMBURSEMENT_TYPE;

    setList([botMessage, reimbursemnetType]);
  }, []);

  const handleTravelDeskPress = () => {
    setIsButtonPressed(true);
    var reimbursementData = getNewReimbursmentItem();
    reimbursementData.viewType = LayoutType.LAYOUT_JOURNEY_LIST;
    setList(prevList => [...prevList, reimbursementData]);
  };

  const handleOtherPress = () => {
    setIsButtonPressed(true);
    setShowCategoryLayout(true);
  }
  const onCategoryItemClick = (abcd, categoryID) => {
    setSelectedCategory(abcd);
    setCategoryId(categoryID);
    setShowReimbursemnetForm(true);
  };

  const handleCameraIconClick = () => {
    console.log('Camera icon clicked');
    setShowDialog(true);
  };





  const handleSendBill = (description, billAmount, currencySymbol) => {


    const apiUrl = 'http://localhost:4000/api/reimbursement';
    const reimbursementBill = {
      reimbursementBillType: selectedCategory,
      reimbursementBillTypeId: categoryID,
      currency: currencySymbol,
      amount: billAmount,
      imagePath: [
        'http://172.16.12.34:4000/api/travelexecutiverequests/download/bird-g50fa28f56_1280.jpg',

      ],
      userDescription: description,
    };


    const requestData = {
      userId: auth.user.id,
      reimbursementType: 'Traveldesk',
      travelDeskId: itemId,
      reimbursementBill: reimbursementBill ? [reimbursementBill] : [],
    };

    axios.post(apiUrl, requestData)
      .then(response => {
        console.log('reimbursementBill:', response);
        var reimbursemnetAcocuntBill = getNewReimbursmentItem();
        reimbursemnetAcocuntBill.viewType = LayoutType.LAYOUT_CURRENCY_TYPE;
        reimbursemnetAcocuntBill.reimbursementBill = response.data.data.reimbursementBill;
        console.log("refvbjhvbkjfh:", reimbursemnetAcocuntBill
          .reimbursementBill)

        const existingBillIndex = list.findIndex(item => item.itemId === itemId);
        if (existingBillIndex !== -1) {
          list[existingBillIndex].reimbursementBill = response.data.data.reimbursementBill;
          setSelectedItemId(itemId);
          setList([...list]);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const handleJourneyListPress = (itemId) => {
    console.log("jfhg:", itemId)
    setIsButtonPressed(true);
    setShowCategoryLayout(true);


    const travelDeskId = {
      travelDeskId: itemId
    };

    axios.post('http://localhost:4000/api/reimbursement/GetReimbursementList', travelDeskId)
      .then(response => {

        console.log('ReimbursemnetBillResponse:', response.data);

        const firstItem = response.data.data[0];
        const reimbursementId = firstItem._id;
        console.log('_id:', reimbursementId);
        setReimbursemnetBillId(reimbursementId);
        var reimbursementBillData = getNewReimbursmentItem();
        reimbursementBillData.viewType = LayoutType.LAYOUT_CURRENCY_TYPE;
        reimbursementBillData.reimbursementBill = response.data.data[0]?.reimbursementBill || [];

        data = response.data.data[0]?.reimbursementBill
        console.log("jkdfhfdkj:", data)
        reimbursementBillData.itemId = itemId;
        console.log("idBill:", reimbursementBillData.itemId)
        setSelectedItemId(itemId);
        setList(previList => [...previList, reimbursementBillData]);
      })
      .catch(error => {
        console.error('API Error:', error);
      });
  };

  const handleSelectedImage = (selectedGalleryImage) => {
    setSelectedGalleryImage(selectedGalleryImage);
    console.log('Selected image URI:', selectedGalleryImage);
    uploadFileToApi(selectedGalleryImage);
    setShowDialog(false);
  };



  const handleReimbursementBill = () => {
    console.log('id:fhvbfvnb.', reimbursementId)
    const url = `http://localhost:4000/api/reimbursement/${reimbursementId}`;
    const data = {
      isDone: true,
    };

    axios.patch(url, data)
      .then(response => {

        console.log('isDoneApi is Sucessfull:', response.data);
      })
      .catch(error => {

        console.error('Error :', error);
      });
  };

  const renderAbstractLayout = ({ item }) => {
    return <View style={{ paddingHorizontal: 10 }}>{renderItems(item)}</View>;
  };

  const renderItems = item => {
    if (item.viewType === LayoutType.LAYOUT_FIRSTBOT_MESSAGE) {
      const botMessage = getMessageById(1);
      const messageText = botMessage.message;

      return (
        <View>
          <FirstMessage botMessage={messageText} />
        </View>
      );
    }

    if (item.viewType === LayoutType.LAYOUT_REIMBURSEMENT_TYPE) {
      return (
        <View>
          <ReimburmentType
            onTravelDeskPress={handleTravelDeskPress}
            onOtherPress={handleOtherPress}
          />
        </View>
      );
    }
    if (item.viewType === LayoutType.LAYOUT_JOURNEY_LIST) {
      return (
        <View>
          <ReimbursemnetJourneyList
            onClickJourneyList={(itemId) => handleJourneyListPress(itemId)} />
        </View>
      );
    }
    if (item.viewType === LayoutType.LAYOUT_CURRENCY_TYPE) {
      return (
        <View>
          <ReimbursemnetAcocuntBill item={item} />
        </View>
      );
    }

    if (item) return <View />;
  };

  return (


    <View style={{ flex: 1 }}>
      {showCategoryLayout ? (
        <ReimbursemnetCategoryList
          onCategoryClick={(categoryID, reimbursementCategory) =>
            onCategoryItemClick(categoryID, reimbursementCategory)}
          selectedItems={selectedCategory}
          categoryType={'Traveldesk'} />
      ) : null}

      <FlatList
        style={{
          flex: 1, maxHeight: showReimbursemnetForm ? 450
            : 'auto'
        }}
        data={list}
        renderItem={renderAbstractLayout}
        ItemSeparatorComponent={<View style={{ marginVertical: 10 }}></View>}
      />

      <View style={{
        backgroundColor: 'white', position: 'absolute', bottom: 0, width: '100%'
      }}>
        {showReimbursemnetForm ? (
          <ReimbursementBillDetails
            onPressSubmitDone={handleReimbursementBill}
            onClickImage={handleCameraIconClick}
            onClickSendBill={handleSendBill.bind(this)} />
        ) : null}
      </View>


      <DailogboxImage
        isShow={showDialog}
        onRequestClose={() => setShowDialog(false)}
        onClose={() => setShowDialog(false)}
        selectedGalleryImage={handleSelectedImage} />

    </View>
  );
};

export default ReimbursementScreen;
