// import React, { useContext } from 'react';
// import Animated, { interpolate } from 'react-native-reanimated';
// import { View } from 'react-native';
// import styled from 'styled-components/native';
// import { AnimatedContext } from './DrawerNavigation';
// import HomeScreen from '../screens/Home/HomeScreen';
// // import styles from '../screens/Home/Styles/HomeStyle';

// function withFancyDrawer(Component: any) {
//   function Wrapper({ children }: any) {
//     const animated = useContext(AnimatedContext);
//     const scale = interpolate(animated, {
//       inputRange: [0, 1],
//       outputRange: [1, 0.8]
//     });
//     const translateMainCard = interpolate(animated, {
//       inputRange: [0, 1],
//       outputRange: [0, 20]
//     });
//     const translateTransparentCard = interpolate(animated, {
//       inputRange: [0, 0.5, 1],
//       outputRange: [0, 0, -50]
//     });

//     return (
//       <>
//         <BgWhite />
//         <View
//           style={{
//             flex: 1,
//             flexGrow:1,
//             width:'100%',
//             backgroundColor:'red'
//           }}>
//           <TransitionContainer
//             style={{
//               transform: [{ scale, translateX: translateMainCard }],
//               borderRadius: 30
//             }}>
//             <TransparentCard
//               style={{
//                 transform: [
//                   { translateX: translateTransparentCard },
//                   { scale: 0.9 }
//                 ]
//               }}>
//               {/* <HomeScreen navigation={undefined} /> */}
//             </TransparentCard>
//             <ShadowCard />
//             <Card>{children}</Card>
//           </TransitionContainer>
//         </View>
//       </>
//     );
//   }
//   return (props) => (
//     <Wrapper>
//       <Component {...props} />
//     </Wrapper>
//   );
// }

// export default withFancyDrawer;

// const TransitionContainer = styled(Animated.View)`
//   flex: 1;
//   align-items: center;
//   justify-content: center;
// `;
// const TransparentCard = styled(Animated.View)`
//   width: 100%;
//   height: 100%;
//   opacity: 1;
//   border-radius: 30px;
//   margin-left: -21px;
//   overflow: hidden;
//   background-color: rgba(0, 0, 0, 1);
// `;
// const Card = styled.View`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   overflow: hidden;
//   border-radius: 30px;
//   z-index: 9999;
// `;

// const ShadowCard = styled(Animated.View)`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   left: 0px;
//   top: 0;
//   z-index: 999;
//   border-radius: 30px;
//   overflow: visible;
//   box-shadow: -19px 20px 99px #006653;
//   background: #ffffff35;
// `;

// const BgWhite = styled.View`
//   width: 1500px;
//   height: 100%;
//   position: absolute;
//   left: -500px;
//   top: 0;
//   background: #ffffff;
// `;
import React, { PropsWithChildren, useContext } from 'react';
import Animated, { interpolate } from 'react-native-reanimated';
import { Platform, StyleSheet, View } from 'react-native';
// @ts-ignore
import styled from 'styled-components/native';
import { AnimatedContext, THEME_COLOR } from './DrawerNavigation';
import HomeScreen from '../screens/Home/HomeScreen';
import { useIsDrawerOpen } from '@react-navigation/drawer';
// import { useSelector } from 'react-redux';
// import HomeScreen from '../screens/Home/HomeScreen';
// import { RootState } from '../store/reducers';

export function withFancyDrawer(Component) {
  function Wrapper({ children }) {
    const animated = useContext(AnimatedContext);
    const scale = interpolate(animated, {
      inputRange: [0, 1],
      outputRange: [1, 0.8]
    });
    const translateMainCard = interpolate(animated, {
      inputRange: [0, 1],
      outputRange: [0, 20]
    });
    const translateTransparentCard = interpolate(animated, {
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, -50]
    });
    // const { screen } = useSelector((state: RootState) => state.app);
    const isDrawerOpen = useIsDrawerOpen();

    return (
      <View style={styles.container}>
        <TransitionContainer
          style={{
            transform: [{ scale, translateX: translateMainCard }]
          }}>
          <TransparentCard
            style={{
              transform: [
                { translateX: translateTransparentCard },
                { scale: 0.9 }
              ]
            }}>
            {/* {screen === 'Home' ? <DetailScreen /> : <HomeScreen />} */}
            {isDrawerOpen && (
              <View style={{ flex: 1 }}>
                <HomeScreen navigation={undefined} />
                <View
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 102, 83, 0.2)',
                    borderRadius: 30
                  }}
                />
              </View>
            )}
          </TransparentCard>
          {isDrawerOpen ? <Card2>{children}</Card2> : <Card>{children}</Card>}
        </TransitionContainer>
      </View>
    );
  }
  // eslint-disable-next-line react/display-name
  return (props) => (
    <Wrapper>
      <Component {...props} />
    </Wrapper>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%'
    // backgroundColor: '#006653',
  }
});

const TransitionContainer = styled(Animated.View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  box-shadow: -2px 10px 20px rgba(0, 102, 83, 0.1);
  elevation: ${Platform.OS === 'android' ? '-39' : 0};
`;
const TransparentCard = styled(Animated.View)`
  width: 100%;
  height: ${Platform.OS === 'android' ? '100%' : '95%'};
  background-color: white;
  border-radius: 30px;
  box-shadow: -2px 10px 20px rgba(0, 102, 83, 0.1);
  elevation: ${Platform.OS === 'android' ? '-39' : 0};
`;
const Card = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 0px;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;
const Card2 = styled.View`
  width: 100%;
  height: ${Platform.OS === 'android' ? '100%' : '90%'};
  border-radius: 30px;
  background-color: white;
  position: absolute;
  top: 0;
  overflow: hidden;
`;
