import * as React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { Container, Content, Header } from '../../components';
import CommonBtn from '../../components/CommonBtn';
import OrderFoodList from '../../components/OrderFoodList';
import { orderFoodBillListData, orderFoodListData } from '../../assets/data';
import styles from './Styles/OrderSummaryStyle';
import { Images } from '../../theme';

function OrderSummaryScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.billTextRow}>
      <Text style={styles.foodItemText}>{item.itemName}</Text>
      <Text style={styles.amountText}>{item.itemPrice}</Text>
    </View>
  );
  return (
    <Container statusBarColorWhite conatinerStyle={styles.conatinerStyle}>
      <Header
        hasBackBtn
        title="Your Order Summary"
        onBackPress={() => navigation.goBack()}
      />
      <Content contentContainerStyle={styles.container}>
        <View style={styles.hotelNameLocation}>
          <Text style={styles.hotelNameText}>Peopel’s Dine</Text>
          <Text style={styles.hotelLocationText}>
            696 Hettinger Hill Apt. MI 69169
          </Text>
        </View>
        <View style={styles.orderFoodListContent}>
          <Text style={styles.deliveredFoodText}>
            This order with Peopel’s Dine was delivered
          </Text>
          <OrderFoodList
            data={orderFoodListData}
            containerstyle={styles.orderFoodListContainerstyle}
          />
        </View>
        <View style={styles.foodBiilList}>
          <FlatList
            bounces={false}
            data={orderFoodBillListData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <View style={styles.totalBillTextRow}>
            <Text style={styles.grandTotalText}>Grand Total</Text>
            <Text style={styles.totalAmountText}>$647</Text>
          </View>
        </View>
        <View style={styles.userDetaileContent}>
          <View style={styles.userDetaileHeadingRow}>
            <Text style={styles.userDetaileHeadingText}>
              Your Order Details
            </Text>
          </View>
          <View style={styles.userDetaileList}>
            <Image
              source={Images.userLineIcon}
              resizeMode="contain"
              style={styles.userDetaileLeftImg}
            />
            <View style={styles.userDetaileRightText}>
              <Text style={styles.userDetaileText}>Michelle Rodriguez</Text>
            </View>
          </View>
          <View style={styles.userDetaileList}>
            <Image
              source={Images.CallLineIcon}
              resizeMode="contain"
              style={styles.userDetaileLeftImg}
            />
            <View style={styles.userDetaileRightText}>
              <Text style={styles.userDetaileText}>+1 (783) 0986 8786</Text>
            </View>
          </View>
          <View style={styles.userDetaileList}>
            <Image
              source={Images.LocationLineIcon}
              resizeMode="contain"
              style={styles.userDetaileLeftImg}
            />
            <View style={styles.userDetaileRightText}>
              <Text style={styles.userDetaileText}>
                69 Hettinger Hill Apt. MI 6969
              </Text>
            </View>
          </View>
          <View style={[styles.userDetaileList, styles.userDetaileLastList]}>
            <Image
              source={Images.GooglePayIcon}
              resizeMode="contain"
              style={styles.userDetaileLeftImg}
            />
            <View style={styles.userDetaileRightText}>
              <Text style={styles.userDetaileText}>Paid: Google Pay</Text>
            </View>
          </View>
        </View>
        <CommonBtn
          normalBtn
          commonBtnStyle={styles.paymentBtn}
          btnText="Process to Repeat Order"
          onPress={() => navigation.navigate('Order')}
        />
      </Content>
    </Container>
  );
}

export default OrderSummaryScreen;
