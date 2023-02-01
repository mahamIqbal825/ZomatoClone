import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import Modal from "react-native-modal";
import { CSS } from './Styles/choosePay'
import { API_SERVICE } from '../../utils/API'


export default function AddOrderInstructions({ showModel, setShowModel, order_id }) {

    const [inText, setIntext] = useState('');


    const onSave = async () => {
        try {
            const result = await API_SERVICE('orders/addinstruction', { instructions: inText, order_id }, 'POST')
            const { status } = result
            if (status === 1) {
                setIntext('')
                setShowModel(false)
            }
        }catch(err){
            Alert.alert('error', err.message)
        }
        
    }
    return (
        <Modal
            animationOutTiming={600}
            animationInTiming={1000}
            useNativeDriver={true}
            onBackdropPress={() => setShowModel(false)}
            animationIn={'slideInUp'}
            style={{ margin: 15 }}
            isVisible={showModel}>
            <View style={{
                backgroundColor: '#fff',
                minHeight: '40%',
                borderRadius: 20,
                padding: 20,
                position: 'relative'
            }}>
                <View style={{ height: 30, marginBottom: 10, borderBottomColor: '#00665333', borderBottomWidth: 1, paddingBottom: 0 }}>
                    <Text style={{ fontSize: 16, fontFamily: 'SofiaPro', textAlign: 'center' }}>Cooking instructions</Text>
                </View>

                <TextInput
                    placeholder={'Please add your instructions here'}
                    style={{ minHeight: 100, flex: 1, fontFamily: 'SofiaPro', }}
                    value={inText}
                    onChangeText={(t) => setIntext(t)}
                    multiline={true}
                    underlineColorAndroid='transparent'
                />
                <TouchableOpacity onPress={onSave} style={CSS.button}>
                    <Text style={CSS.buttonText}>Save</Text>
                </TouchableOpacity>

            </View>
        </Modal>
    )
}
