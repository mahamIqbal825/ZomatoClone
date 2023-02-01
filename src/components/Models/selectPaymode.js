import React, { useState } from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CSS } from './Styles/choosePay'

export default function ChoosePayMode({ showModel, setShowModel, setSelectedOptions }) {

    const [saveCard, setSaveCard] = useState(true);
    const [payMode, setPayMode] = useState(1);

    const onSave = () => {
        
        setSelectedOptions({
            saveCard,
            payMode
        })
        setShowModel(false)
    }
    return (
        <Modal
            animationOutTiming={600}
            animationInTiming={1000}
            useNativeDriver={true}
            onBackdropPress={() => setShowModel(false)}
            animationIn={'slideInUp'}
            style={{ margin: 0 }}
            isVisible={showModel}>
            <View style={CSS.container}>

                <View style={CSS.section}>
                    <TouchableOpacity onPress={() => setPayMode(1)} style={CSS.tnt}>
                        <Ionicons name={payMode === 1 ? "radio-button-on-outline" : "radio-button-off-outline"} size={30} />
                        <Text style={CSS.header}>Online</Text>
                    </TouchableOpacity>
                    <Text style={CSS.smallText}>{`Credit card / Debit card ${Platform.OS === 'ios' ? ' / Apple pay' : ''}`}</Text>
                    {
                        payMode === 1 && <TouchableOpacity onPress={() => setSaveCard(payMode === 1 && !saveCard)}
                            style={CSS.tnt2}>
                            <Ionicons name={saveCard ? "checkbox-outline" : "square-outline"} size={20} style={{ marginStart: 5, marginEnd: 5 }} />
                            <Text style={CSS.tnt3}>Save card details for future orders</Text>
                        </TouchableOpacity>
                    }
                </View>

                <View style={CSS.section2}>
                    <TouchableOpacity onPress={() => setPayMode(2)} style={CSS.tnt}>
                        <Ionicons name={payMode === 2 ? "radio-button-on-outline" : "radio-button-off-outline"} size={30} />
                        <Text style={CSS.header}>Cash</Text>
                    </TouchableOpacity>
                    <Text style={CSS.smallText}>Cash on delivery</Text>
                </View>


                <TouchableOpacity onPress={onSave} style={CSS.button}>
                    <Text style={CSS.buttonText}>Select</Text>
                </TouchableOpacity>


            </View>
        </Modal>
    )
}
