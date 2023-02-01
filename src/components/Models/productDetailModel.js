import React from 'react';
import { View } from 'react-native';
import Modal from "react-native-modal";
import ProductWraper from '../Product/wraperProduct'


export default function ProductDetailModel({ showModel, setShowModel, item, FavouriteItem }) {

    return (
        <Modal
            animationOutTiming={600}
            animationInTiming={1000}
            useNativeDriver={true}
            onBackdropPress={() => setShowModel(false)}
            animationIn={'slideInUp'}
            style={{ margin: 0 }}
            isVisible={showModel}>
            <View style={{
                backgroundColor: '#fff', minHeight: '20%', marginTop: 'auto', borderTopRightRadius: 20,
                borderTopLeftRadius: 20, padding: 30, justifyContent: 'center', alignItems: 'center',
                paddingBottom: 60, position: 'relative'
            }}>
                <ProductWraper
                    key={1}
                    product={item}
                    cartItem={null}
                    favouriteItem={FavouriteItem}
                    detailPage={true}
                />

            </View>
        </Modal>
    )
}
