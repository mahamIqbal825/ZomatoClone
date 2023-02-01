import { StyleSheet } from 'react-native';


export const CSS = StyleSheet.create({
    container:{
        backgroundColor: '#fff', 
        minHeight: '40%', 
        marginTop: 'auto', 
        borderTopRightRadius: 20, 
        borderTopLeftRadius: 20, 
        padding: 30,
        paddingBottom: 60, 
        position: 'relative'
    },
    section:{
        paddingBottom: 15, 
        borderBottomWidth: 1, 
        borderBottomColor: '#00665333',
    },
    header:{
        fontSize: 14, 
        fontFamily: 'SofiaPro', 
        fontWeight: '600'
    },
    smallText:{
        fontSize: 12, 
        fontFamily: 'SofiaPro', 
        fontWeight: '400', 
        marginStart: 30
    },
    button:{
        marginTop: 20, 
        height: 50, 
        backgroundColor: '#006653', 
        borderRadius: 10, 
        width: '100%',
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 10
    },
    buttonText:{
        color: '#fff', 
        fontSize: 16, 
        fontFamily: 'SofiaPro', 
        fontWeight: '600' 
    },
    section2:{
        paddingBottom: 15, 
        borderBottomWidth: 1, 
        borderBottomColor: '#00665333', 
        paddingTop: 15,
    },
    tnt:{
        flexDirection: 'row', 
        alignItems: 'center'
    },
    tnt2:{
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: 5
    },
    tnt3:{
        fontSize: 12, 
        fontFamily: 'SofiaPro', 
        fontWeight: '400'
    }
})