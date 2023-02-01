import * as React from 'react';
import { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, Dimensions } from 'react-native';
import { Container, Content } from '../../components';
import Welcome from '../../components/Welcome';
import { Images } from '../../theme';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles from './Styles/WelcomeStyle';
//import SplashScreen from 'react-native-splash-screen';
import { Colors } from '../../theme';

const slides = [
  {
    id: 1,
    title: 'Choose Your Meal',
    image: Images.WelcomeImg1
  },
  {
    id: 2,
    title: 'Restaurant Prepares \n Your Order',
    image: Images.WelcomeImg2
  },
  {
    id: 3,
    title: 'Get Fastest Delivery',
    image: Images.WelcomeImg3
  }
];

function WelcomeScreen({ navigation }) {
  
  // useEffect(() => {
  //   setTimeout(() => SplashScreen.hide(), 2000);
  // }, []);
  const windowWidth = Dimensions.get('window').width;
  const [index, setIndex] = useState(0);
  const isCarousel = React.useRef(null);
  let renderItem = ({ item }) => (
    <Welcome
      key={item.id}
      heading={item.title}
      peregraph={item.text}
      image={item.image}
    />
  );
  return (
    <Container gradiantBg gradiantBgImg statusBarColor>
      <Content contentContainerStyle={styles.container}>
        <View>
          <Carousel
            ref={(c) => {
              renderItem = c;
            }}
            data={slides}
            renderItem={renderItem}
            sliderWidth={windowWidth - 56}
            itemWidth={windowWidth - 56}
            onSnapToItem={() => setIndex(renderItem.currentIndex)}
          />
        </View>
        <View style={styles.carouselSliderPagination}>
          <Pagination
            dotContainerStyle={[styles.dotContainerStyle]}
            carouselRef={isCarousel}
            dotsLength={slides.length}
            activeDotIndex={index}
            dotStyle={styles.paginationActiveDot}
            inactiveDotStyle={styles.paginationInActiveDot}
            inactiveDotOpacity={0.3}
            inactiveDotScale={1}
          />
        </View>
        <Text style={styles.welcomePeragraph}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt.
        </Text>
        <View style={styles.welcomeBottomBtn}>
          {index < 2 && (
            <Text
              style={styles.skipBtnText}
              onPress={() => navigation.navigate('Home')}>
              Skip
            </Text>
          )}
          <TouchableOpacity
            style={index > 1 ? styles.nextStartFullBtn : styles.nextStartBtn}
            onPress={() =>
              index > 1
                ? navigation.navigate('SignUp')
                : renderItem.snapToNext()
            }>
            <Text style={styles.nextStartBtnText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );
}

export default WelcomeScreen;
