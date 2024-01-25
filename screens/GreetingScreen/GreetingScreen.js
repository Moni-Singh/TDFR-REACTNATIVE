import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import OutlineButton from '../../components/Button/OutlineButtom/OutlineButton';
import AuthContext from '../../context/authContext';
import styles from './GreetingScreen.Styles';
import string from '../../components/String/Strings';
import Colors from '../../config/Colors.js/Colors';

const GreetingScreen = () => {
  const navigation = useNavigation();
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const auth = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            columnGap: 10,
          }}>
          <Icon name={'bars'} size={20} color={Colors.white} />
        </View>
      ),
      headerShown: true,
      title: string.headerString.Gbot,
      headerTitleStyle: {
      fontSize: 25,
      color: Colors.white,
      },
      headerStyle: {
        backgroundColor: Colors.botColor,
      },
    });
  }, []);

  return (
    <ScrollView style={styles.main}>
      <StatusBar backgroundColor={Colors.botColor} barStyle={'dark-content'} />

      <View style={styles.greetingConatiner}>
        <Text
          style={styles.greetingUser}>
          Good Morning {auth.user.name}!
        </Text>
        <Text
          style={styles.textGreeting}>{string.botGreeting.userGreeting}</Text>
      </View>
      <View style={styles.imageBot}>
        <Image
          source={require('../../images/botimg.png')}
          style={styles.botImgae}
        />
      </View>
      <View style={styles.quotesContainer}>
        <Image
          source={require('../../images/openquotes.png')}
          style={styles.imageOpenQuotes}
        />
        <Text style={styles.textLorem}>
          {string.botGreeting.textQuotes}
        </Text>
        <Image
          source={require('../../images/endquotes.png')}
          style={styles.imageEndQuotes}
        />
        <Text
          style={styles.textName}>
          ~Name
        </Text>
      </View>

      <View>
        <Text style={styles.textRecommendation}>
          {string.recommendedOption.textRecommendation}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <OutlineButton title={string.recommendedOption.ApplyLeave} />
        <OutlineButton title={string.recommendedOption.ApplyWFH} />
        <OutlineButton title={string.recommendedOption.RequestHardware} />
        <OutlineButton title={string.recommendedOption.HolidayList} />
        <OutlineButton title={string.recommendedOption.TravelDesk} />
        <OutlineButton
          title={string.recommendedOption.Reimbursement}
          onPress={() => navigation.navigate(string.navigation.ReimbursementScreen)}
        />
        <OutlineButton title={string.recommendedOption.RegisterQuery} />
        <OutlineButton title={string.recommendedOption.MyQueries} />
      </View>

      <View style={styles.moreOptionContainer}>
        <Text style={styles.textMoreOption}>{string.botGreeting.moreOption}</Text>
        <Icon name={'long-arrow-down'} size={30} color="#FBB03B" />
      </View>
    </ScrollView>
  );
};


export default GreetingScreen;
