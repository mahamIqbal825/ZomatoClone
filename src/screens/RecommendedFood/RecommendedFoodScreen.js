import * as React from 'react';
import { View } from 'react-native';
import { Container, Content, Header } from '../../components';
import { Colors } from '../../theme';
import styles from './Styles/RecommendedFoodStyle';
import CommonHeadingBtn from '../../components/CommonHeadingBtn';
import CommonSearchInput from '../../components/CommonSearchInput';
import Sliders from '../../components/Sliders';
import RestaurantNearYou from '../../components/RestaurantNearYou';
import { recommandedFoodData } from '../../assets/data';

export default function RecommendedFoodScreen({ navigation }) {
  return (
    <Container gradiantBg statusBarColor>
      <Header
        hasBackBtn
        transparent
        locationDropDown
        onBackPress={() => navigation.goBack()}
      />
      <Content contentContainerStyle={styles.container}>
        <View style={styles.customContainer}>
          <CommonSearchInput placeHolderText={Colors.searchYellowPlaceholder} />
          <CommonHeadingBtn headingText="Recommended Foods" />
        </View>
        <View style={styles.recommandedSliderContent}>
          <Sliders
            recommandedSlider
            listSlider
            data={recommandedFoodData}
            onPress={() => navigation.navigate('RecommendedFoodRestaurant')}
          />
        </View>
        <View style={styles.customContainer}>
          <CommonHeadingBtn headingText="All Restaurants Delivering Pizza" />
          <RestaurantNearYou
            notLiked
            onPress={() => navigation.navigate('RestaurantDetails')}
          />
        </View>
      </Content>
    </Container>
  );
}
