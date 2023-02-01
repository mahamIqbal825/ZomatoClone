import * as React from 'react';
import { View } from 'react-native';
import { Container, Content, Header } from '../../components';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import RestaurantNearYou from '../../components/RestaurantNearYou';
import AddCartFoodList from '../../components/AddCartFoodList';
import { wishlistFoodItemList } from '../../assets/data';
import { Colors } from '../../theme';
import styles from './Styles/WishlistStyle';

function WishlistScreen({ navigation }) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'restaurant', title: 'Restaurant' },
    { key: 'foodItems', title: 'Food Items' }
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicatorStyle}
      style={styles.tabBarStyle}
      labelStyle={styles.labelStyle}
      tabStyle={styles.tabStyle}
      activeColor={Colors.white}
      pressColor={Colors.transparent}
    />
  );

  const RestaurantRoute = () => (
    <>
      <Content contentContainerStyle={styles.container}>
        <RestaurantNearYou />
      </Content>
    </>
  );

  const FoodItemsRoute = () => (
    <>
      <Content contentContainerStyle={styles.container}>
        <AddCartFoodList
          listView
          likeBtn
          data={wishlistFoodItemList}
          addCartFoodContentStyle={styles.addCartFoodContentStyle}
        />
      </Content>
    </>
  );

  const renderScene = SceneMap({
    restaurant: RestaurantRoute,
    foodItems: FoodItemsRoute
  });
  return (
    <Container statusBarColorWhite>
      <Header
        hasBackBtn
        title="Wishlist"
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.tabViewStyle}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          swipeEnabled={false}
          onIndexChange={setIndex}
        />
      </View>
    </Container>
  );
}

export default WishlistScreen;
