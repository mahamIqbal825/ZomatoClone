import * as React from 'react';
import { useState } from 'react';
import { Image, View, Text } from 'react-native';
import { Container, Content } from '../../components';
import CommonBtn from '../../components/CommonBtn';
import OtpInputs from 'react-native-otp-inputs';
import { Images } from '../../theme';

import styles from './Styles';

function SignUpOtpScreen({ navigation }) {
  let optConfirm = '801696';
  const [otpInputFill, setOtpInputFill] = useState(false);
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
            <Text style={styles.heading}>Enter OTP</Text>
            <View style={styles.inputContent}>
              <Text style={styles.otpPeragraph}>
                An 4 digit code has been sent to{'\n'}+1 (783) 0986 8786
              </Text>
              <OtpInputs
                handleChange={(code) => {
                  // if (optConfirm === code) {
                  setOtpInputFill(true);
                  // }
                }}
                numberOfInputs={6}
                style={styles.otpInputContainer}
                inputStyles={styles.otpInputStyle}
                autofillFromClipboard={false}
              />
            </View>
            <Text style={[styles.greenText, styles.forgotPasswordText]}>
              Resend OTP
            </Text>
            <CommonBtn
              normalBtn
              // disabledBtn={otpInputFill ? false : true}
              btnText="Submit"
              commonBtnStyle={styles.signUpStartBtn}
              onPress={() => navigation.navigate('ResetPassword')}
            />
          </View>
        </Content>
      </Container>
    </>
  );
}

export default SignUpOtpScreen;
