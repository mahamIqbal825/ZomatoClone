import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Content } from '../../components';
import { Images } from '../../theme';
import CommonBtn from '../../components/CommonBtn';
import styles from './Styles/SuccessPaymentStyle';

function SuccessPaymentScreen({ navigation }) {
  return (
    <Container statusBarColorWhite conatinerStyle={styles.conatinerStyle}>
      <Content contentContainerStyle={styles.successContainer}>
        <View style={styles.successContent}>
          <Image
            source={Images.SuccessLineIcon}
            resizeMode="contain"
            style={styles.successIcon}
          />
          <Text style={styles.successText}>
            Your order has been{'\n'}
            successfully placed
          </Text>
          <Text style={styles.successParegraph}>
            Sit and relax while your orders is being{'\n'}
            worked on . It’ll take 5min before you get it
          </Text>
        </View>
        <CommonBtn
          normalBtn
          btnText="Go back to home"
          commonBtnStyle={styles.backHomeBtn}
          onPress={() => navigation.navigate('Home')}
        />
      </Content>
    </Container>
  );
}

export default SuccessPaymentScreen;
