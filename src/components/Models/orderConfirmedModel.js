import React, { useState } from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CSS } from './Styles/choosePay'

export default function OrderConfirmedModel({ showModel, setShowModel, setSelectedOptions }) {

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
            hasBackdrop={false}
            animationOutTiming={600}
            animationInTiming={1000}
            useNativeDriver={true}
            onBackdropPress={() => setShowModel(false)}
            animationIn={'slideInUp'}
            style={{ margin: 0 }}
            isVisible={showModel}>
            <View style={CSS.container}>

    
            </View>
        </Modal>
    )
}
