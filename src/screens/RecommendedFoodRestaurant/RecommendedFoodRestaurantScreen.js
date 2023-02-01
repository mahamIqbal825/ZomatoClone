import * as React from 'react';
import { Container, Content, Header } from '../../components';
import { Colors } from '../../theme';
import styles from './Styles/RecommendedFoodRestaurantStyle';
import RestaurantNearYou from '../../components/RestaurantNearYou';
import CommonHeadingBtn from '../../components/CommonHeadingBtn';
import CommonSearchInput from '../../components/CommonSearchInput';

export default function RecommendedFoodSRestaurantScreen({ navigation }) {
  return (
    <Container gradiantBg statusBarColor>
      <Header hasBackBtn transparent onBackPress={() => navigation.goBack()} />
      <Content contentContainerStyle={styles.container}>
        <CommonSearchInput placeHolderText={Colors.searchYellowPlaceholder} />
        <CommonHeadingBtn headingText="All Restaurants Delivering Onion Pizza" />
        <RestaurantNearYou
          notLiked
          onPress={() => navigation.navigate('RestaurantDetails')}
        />
      </Content>
    </Container>
  );
}
