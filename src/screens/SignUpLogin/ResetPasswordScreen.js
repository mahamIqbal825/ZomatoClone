import * as React from 'react';
import { Image, View, Text } from 'react-native';
import { Container, Content } from '../../components';
import TextInputContent from '../../components/TextInputContent';
import CommonBtn from '../../components/CommonBtn';
import { Colors, Images } from '../../theme';

import styles from './Styles';

function ResetPasswordScreen({ navigation }) {
  return (
    <>
      <Container gradiantBg gradiantBgImg statusBarColor>
        <Content contentContainerStyle={styles.container}>
          <Image
            source={Images.Logo}
            resizeMode="contain"
            style={styles.logo}
          />
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>
              Reset{'\n'}
              Password
            </Text>
            <View style={styles.inputContent}>
              <TextInputContent
                passwordInput
                placeholder="Password"
                type="default"
                leftInputIcon={Images.lockLineIcon}
              />
              <TextInputContent
                passwordInput
                placeholder="Password"
                type="default"
                leftInputIcon={Images.lockLineIcon}
                textInputRowStyle={styles.resetPasswordInput}
              />
            </View>
            <CommonBtn
              normalBtn
              btnText="Get Started"
              onPress={() => navigation.navigate('ForgotOtpVerifyed')}
            />
          </View>
        </Content>
      </Container>
    </>
  );
}

export default ResetPasswordScreen;
