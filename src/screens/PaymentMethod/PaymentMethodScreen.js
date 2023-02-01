import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Header } from '../../components';
import { Images } from '../../theme';
import CommonHeadingBtn from '../../components/CommonHeadingBtn';
import styles from './Styles/PaymentMethodStyle';

function PaymentMethodScreen({ navigation }) {
  return (
    <Container statusBarColorWhite conatinerStyle={styles.conatinerStyle}>
      <Header
        hasBackBtn
        title="Payment Method"
        onBackPress={() => navigation.goBack()}
      />
      <Content contentContainerStyle={styles.container}>
        <CommonHeadingBtn headingText="Recommended" />
        <View style={styles.paymentListContent}>
          <TouchableOpacity
            style={styles.paymentListRow}
            onPress={() => navigation.navigate('SuccessPayment')}>
            <Image
              source={Images.PaytmIcon}
              resizeMode="contain"
              style={styles.paymentIcon}
            />
            <View style={styles.paymentListName}>
              <Text style={styles.paymentListText}>Paytm UPI</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paymentListRow}
            onPress={() => navigation.navigate('SuccessPayment')}>
            <Image
              source={Images.PhonePeIcon}
              resizeMode="contain"
              style={styles.paymentIcon}
            />
            <View style={styles.paymentListName}>
              <Text style={styles.paymentListText}>PhonePe</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paymentListRow}
            onPress={() => navigation.navigate('SuccessPayment')}>
            <Image
              source={Images.GooglePayIcon}
              resizeMode="contain"
              style={styles.paymentIcon}
            />
            <View style={styles.paymentListName}>
              <Text style={styles.paymentListText}>Google Pay</Text>
            </View>
          </TouchableOpacity>
        </View>
        <CommonHeadingBtn headingText="Cards" />
        <View style={styles.paymentListContent}>
          <TouchableOpacity
            style={styles.paymentListRow}
            onPress={() => navigation.navigate('SuccessPayment')}>
            <Image
              source={Images.CardIcon}
              resizeMode="contain"
              style={styles.paymentIcon}
            />
            <View style={styles.paymentListName}>
              <Text style={styles.paymentListText}>
                Credit, Debit & ATM Cards
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <CommonHeadingBtn headingText="UPI" />
        <View style={styles.paymentListContent}>
          <TouchableOpacity
            style={styles.paymentListRow}
            onPress={() => navigation.navigate('SuccessPayment')}>
            <Image
              source={Images.UpiIconIcon}
              resizeMode="contain"
              style={styles.paymentIcon}
            />
            <View style={styles.paymentListName}>
              <Text style={styles.paymentListText}>Pay via UPI</Text>
            </View>
          </TouchableOpacity>
        </View>
        <CommonHeadingBtn headingText="Netbanking" />
        <View style={styles.paymentListContent}>
          <TouchableOpacity
            style={styles.paymentListRow}
            onPress={() => navigation.navigate('SuccessPayment')}>
            <Image
              source={Images.NetBankingIcon}
              resizeMode="contain"
              style={styles.paymentIcon}
            />
            <View style={styles.paymentListName}>
              <Text style={styles.paymentListText}>Netbanking</Text>
            </View>
          </TouchableOpacity>
        </View>
        <CommonHeadingBtn headingText="Pay On Delivery" />
        <View style={styles.paymentListContent}>
          <TouchableOpacity
            style={styles.paymentListRow}
            onPress={() => navigation.navigate('SuccessPayment')}>
            <Image
              source={Images.CashIcon}
              resizeMode="contain"
              style={styles.paymentIcon}
            />
            <View style={styles.paymentListName}>
              <Text style={styles.paymentListText}>Cash on delivery</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );
}

export default PaymentMethodScreen;
