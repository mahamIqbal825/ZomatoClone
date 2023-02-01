import React ,{useState} from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Keyboard } from 'react-native';
import Modal from "react-native-modal";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { API_SERVICE } from '../../utils/API'
import { useDispatch } from 'react-redux';
import { setUserAddress } from '../../redux/actions/UserAction'


export default function CreateAddressModel({ showModel, setShowModel, adress, onSave }) {

    const [ selectedTag, setSelectedTag ]= useState('Home')
    const [ house, setHouse ]= useState('')
    const [ building, setBuilding ]= useState('')
    const [ area, setArea ]= useState(addrLine1)
    const [ landmark, setLandmark ]= useState('')
    
    const dispatch = useDispatch();
    const { addrLatitude, addrLine1, addrLongitude } = adress ? adress: {}

    const onPress = async () => {
        Keyboard.dismiss();
        
        const payload = { selectedTag, house, building, area, landmark, addrLatitude, addrLine1, addrLongitude }
      
        try{
            const result = await API_SERVICE('customer/address', payload)
            const { status, data  } = result
            if( status === 1){
                dispatch(setUserAddress(data))
                onSave()
            }
          }catch(e){
            console.log(e);
          }
     }

    return (
        <Modal
            animationOutTiming={600}
            animationInTiming={1000}
            useNativeDriver={true}
            onBackdropPress={() => setShowModel(false)}
            animationIn={'slideInUp'}
            style={{ margin: 0 }}
            avoidKeyboard={true}
            isVisible={showModel}>
            <View style={{
                backgroundColor: '#fff', minHeight: '20%', marginTop: 'auto', borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                paddingBottom: 30, position: 'relative'
            }}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                    height: 45, borderBottomColor: '#C4C4C4', borderBottomWidth: 1, width: '100%', paddingEnd: 20, paddingStart: 20
                }}>
                    <Text style={{ flex: 1, fontSize: 18, fontFamily: 'SofiaPro', color: '#01000D' }}>Enter address details</Text>
                    <TouchableOpacity onPress={onPress}
                        style={{ marginStart: 15, alignItems: 'center', justifyContent: 'center', }}>
                        <Ionicons name={'close-outline'} size={25} color="#C4C4C4" />
                    </TouchableOpacity>
                </View>

                <View style={{paddingEnd: 20, paddingStart: 20, paddingTop: 15}}>
                    <Text style={{fontSize:10, fontFamily: 'SofiaPro', color: '#01000D'}}>Tag this location for later</Text>
                    
                    <View style={{flexDirection:'row', paddingTop:10, }}>
                        <Tag title={'Home'} selectedTag={selectedTag} setSelectedTag={setSelectedTag}/>
                        <Tag title={'Work'} selectedTag={selectedTag} setSelectedTag={setSelectedTag}/>
                        <Tag title={'Hotel'} selectedTag={selectedTag} setSelectedTag={setSelectedTag}/>
                        <Tag title={'Other'} selectedTag={selectedTag} setSelectedTag={setSelectedTag}/>
                    </View>
                </View>

                <View style={{paddingEnd: 20, paddingStart: 20, width: '100%', paddingTop: 15, paddingBottom:30 }}>
                    <InputText value = {house} setValue = {setHouse} placeholder={'House no. / Flat no. *'} autoFocus={true}/>
                    <InputText value = {building} setValue = {setBuilding} placeholder={'Building / Permise name *'} autoFocus={false}/>
                    <InputText value = {addrLine1} setValue = {setArea} placeholder={'Area / Street *'} autoFocus={false}/>
                    {/* <InputText value = {landmark} setValue = {setLandmark} placeholder={'Landmark (Optional)'} autoFocus={false}/> */}

                    <TouchableOpacity onPress={onPress}
                    style={{borderColor: '#C4C4C4', borderWidth:1, width: '100%', borderRadius: 10, height: 45, 
                            justifyContent:'center', alignItems:'center', backgroundColor:'#006653'}}>
                        <Text style={{ fontSize: 16, fontFamily: 'SofiaPro', color: '#fff' }}>Save address</Text>
                    </TouchableOpacity>

                </View>
                
            </View>
        </Modal>
    )
}

const Tag = ({title, selectedTag, setSelectedTag}) =><TouchableOpacity onPress={()=> setSelectedTag(title)}>
    <Text style={[CSS.tag, { borderColor: selectedTag === title ? '#006653':'#C4C4C4' }]}>{title}</Text>
</TouchableOpacity>

const InputText = ({value, setValue, placeholder, autoFocus}) => 
    <TextInput
        value={value}
        onChangeText={(e)=> setValue(e)}
        autoFocus={autoFocus}
        placeholder={placeholder}
        style={{height: 45, borderColor: '#C4C4C4', borderWidth:1, width: '100%', borderRadius: 10, fontFamily: 'SofiaPro', 
                padding: 10, marginBottom: 20}}
    />

const CSS = StyleSheet.create({
    tag:{
        borderColor: '#C4C4C4', 
        borderWidth:1, 
        borderRadius: 5, 
        fontSize:10, 
        paddingStart: 10, 
        paddingEnd: 10, 
        paddingBottom: 5, 
        paddingTop:5, 
        marginEnd: 10
    }
})
