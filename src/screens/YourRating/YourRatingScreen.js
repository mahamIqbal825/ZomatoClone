import * as React from 'react';
import { useState } from 'react';
import { TextInput, Text, Image } from 'react-native';
import { Container, Content, Header } from '../../components';
import CommonBtn from '../../components/CommonBtn';
import { Rating } from 'react-native-ratings';
import { Images, Colors } from '../../theme';
import styles from './Styles/YourRatingStyle';

function YourRatingScreen({ navigation }) {
  const [ratingStart, setRatingStart] = useState(4);
  return (
    <Container statusBarColorWhite conatinerStyle={styles.conatinerStyle}>
      <Header
        hasBackBtn
        title="Your Rating"
        onBackPress={() => navigation.goBack()}
      />
      <Content contentContainerStyle={styles.container}>
        <Image
          source={Images.Logo}
          resizeMode="contain"
          style={styles.ratinglogo}
        />
        <Text style={styles.ratingTitleText}>
          Please Rate Quick Delivery App
        </Text>
        <Text style={styles.ratingTypeText}>
          {ratingStart === 1 && 'Terrible'}
          {ratingStart === 2 && 'Bad'}
          {ratingStart === 3 && 'Okay'}
          {ratingStart === 4 && 'Good'}
          {ratingStart === 5 && 'Great'}
        </Text>
        <Rating
          type="custom"
          ratingCount={5}
          startingValue={4}
          ratingColor={Colors.starYellow}
          style={styles.ratingStarContent}
          ratingBackgroundColor={Colors.transparent}
          onFinishRating={(d) => setRatingStart(d)}
        />
        <TextInput
          multiline
          placeholder="Write review"
          placeholderTextColor={Colors.lightBlack}
          style={styles.reviewInputStyle}
        />
        <CommonBtn
          normalBtn
          btnText="Submit"
          commonBtnStyle={styles.reviewSubmitBtn}
        />
      </Content>
    </Container>
  );
}

export default YourRatingScreen;
