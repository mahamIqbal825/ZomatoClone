import * as React from 'react';
import { Image, Text } from 'react-native';
import { Container, Content } from '../../components';
import { Images } from '../../theme';

import styles from './Styles';

function SignUpOtpVerifyedScreen({ navigation }) {
  setTimeout(() => {
    navigation.navigate('Home');
  }, 2000);
  return (
    <>
      <Container gradiantBg gradiantBgImg safeAreaView={false}>
        <Content contentContainerStyle={styles.successContainer}>
          <Image
            source={Images.SuccessLineIcon}
            resizeMode="contain"
            style={styles.successIcon}
          />
          <Text style={styles.successText}>
            Your OTP has{'\n'}
            been successfully verified
          </Text>
        </Content>
      </Container>
    </>
  );
}

export default SignUpOtpVerifyedScreen;
