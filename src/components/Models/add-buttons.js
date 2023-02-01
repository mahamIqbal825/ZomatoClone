import * as React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { Images } from '../../theme';
import styles from './Styles/index';

export const AddButton = ({ cartQty, pressedCartButton }) => {

    if (cartQty > 0) {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={()=> pressedCartButton('REMOVE')}>
                    <Image
                        source={Images.MinusIcon}
                        resizeMode="contain"
                        style={{ width: 15, height: 15, marginStart: 10, marginEnd: 10 }} />
                </TouchableOpacity>
                <Text style={[styles.addCartFoodHeadingText, { marginBottom: 0, flex: 1, textAlign: 'center', fontSize: 17 }]}>{cartQty}</Text>
                <TouchableOpacity onPress={()=> pressedCartButton('ADD')}>
                    <Image
                        source={Images.PluseIcon}
                        resizeMode="contain"
                        style={{ width: 15, height: 15, marginStart: 10, marginEnd: 10 }} />
                </TouchableOpacity>
            </View>
        )
    }
    
    return <TouchableOpacity onPress={()=> pressedCartButton('ADD')}><Text style={[styles.addCartFoodPriceText, { paddingTop: 2, }]}>ADD</Text></TouchableOpacity>

}