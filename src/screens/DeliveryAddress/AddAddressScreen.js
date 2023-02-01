import * as React from 'react';
import { View } from 'react-native';
import { Container, Content, Header } from '../../components';
import styles from './Styles/DeliveryAddressStyle';
import CommonBtn from '../../components/CommonBtn';
import TextInputContent from '../../components/TextInputContent';
import { Images } from '../../theme';

function AddAddressScreen({ navigation }) {
  return (
    <Container statusBarColorWhite conatinerStyle={styles.conatinerStyle}>
      <Header
        hasBackBtn
        title="Add New Address"
        onBackPress={() => navigation.goBack()}
      />
      <Content contentContainerStyle={styles.container}>
        <View style={styles.addAddressList}>
          <TextInputContent
            normalInput
            placeholder="Full name"
            leftInputIcon={Images.userLineIcon}
            type="default"
          />
          <TextInputContent
            normalInput
            placeholder="Mobile"
            leftInputIcon={Images.CallLineIcon}
            type="number-pad"
          />
          <TextInputContent
            normalInput
            placeholder="Street"
            leftInputIcon={Images.LocationLineIcon}
            type="default"
          />
          <TextInputContent normalInput placeholder="City" type="default" />
          <TextInputContent normalInput placeholder="State" type="default" />
          <TextInputContent normalInput placeholder="Country" type="default" />
          <TextInputContent normalInput placeholder="Pincode" type="default" />
        </View>
        <CommonBtn
          normalBtn
          commonBtnStyle={styles.addAddressBtn}
          btnText="Save"
          onPress={() => navigation.goBack()}
        />
      </Content>
    </Container>
  );
}

export default AddAddressScreen;
