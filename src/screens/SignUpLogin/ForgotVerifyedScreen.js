import * as React from 'react';
import { Image, Text } from 'react-native';
import { Container, Content } from '../../components';
import { Images } from '../../theme';

import styles from './Styles';

function ForgotVerifyedScreen({ navigation }) {
  setTimeout(() => {
    navigation.navigate('Login');
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
            Your password has{'\n'}
            been successfully changed
          </Text>
        </Content>
      </Container>
    </>
  );
}

export default ForgotVerifyedScreen;
