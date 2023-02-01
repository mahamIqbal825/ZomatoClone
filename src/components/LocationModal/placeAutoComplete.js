import React from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView } from 'react-native';
import colors from 'kibsons/colors'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { locale } from 'kibsons/global'
import { connect } from 'react-redux'

class PlaceAutoComplete extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View
          opacity={1}
          style={{ backgroundColor: '#fff', width: '100%', height: '100%', position: 'relative' }}>

          <GooglePlacesAutocomplete
            placeholder='Search'
            fetchDetails={true}
            autoFocus={false}

            onPress={(data, details = null) => {
              const { lat, lng } = details.geometry.location;
              let region = {
                latitude: lat,
                longitude: lng,
                latitudeDelta:0.5,
                longitudeDelta:0.1,
              }
              this.props.SET_AUTO_COMPLETE_LIST(region)
              this.props.navigation.goBack()
            }}
            query={{ key: 'AIzaSyAQDBt0FHmbPe6x7O6H5EudhcdaaFXO_H4', language: locale, components: 'country:ae', }}
            styles={{
              textInputContainer: {
                backgroundColor: 'rgba(0,0,0,0)',
                borderTopWidth: 0,
                borderBottomWidth: 0,
              },
              textInput: {
                marginLeft: 0,
                marginRight: 0,
                height: 38,
                color: '#5d5d5d',
                fontSize: 16,
                borderBottomWidth: 1,
                borderBottomColor: colors.Gray2
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
            }}
          />

          <View style={{ marginTop: 0, position: 'absolute', end: 0, }}>
            <TouchableOpacity
              style={{ width: '100%', alignItems: 'flex-end' }}
              onPress={() => this.props.navigation.goBack()}>
              <Ionicons name="close-circle-outline" size={30} color="#0d2c6c" style={{ marginTop: 5 }} />
            </TouchableOpacity>
          </View>

        </View>

      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => ({

  AddressList: state.AddressReducer.AddressList,
  isLoading: state.AddressReducer.isLoading,
  AnimatingGooleApi: state.AddressReducer.AnimatingGooleApi,
  GooleApiAddress: state.AddressReducer.GooleApiAddress,

});

function mapDispatchToProps(dispatch) {
  return {
    SET_AUTO_COMPLETE_LIST: (data) => dispatch({ 'type': 'SET_AUTO_COMPLETE_LIST', data: data }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlaceAutoComplete)




const styles = StyleSheet.create({

  input: {
    borderColor: colors.LightGreen,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    fontFamily: 'GillSans-Medium',
    fontWeight: '400',

  },
  button: {
    padding: 10,
    backgroundColor: colors.LightGreen,
    marginTop: 15,
    fontFamily: 'GillSans-Medium',
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
  },

  text: {
    color: colors.Blue,
    fontFamily: 'GillSans-Medium',
    fontWeight: '400',
    fontSize: 12,
    marginBottom: 5,
    textAlign: 'left',
  },

  map_top_stripText: {
    width: "100%",
    padding: 10,
    color: colors.Gray5,
    fontFamily: 'GillSans-Medium',
    fontWeight: '500',
    fontSize: 12
  },

  map_bottom_details: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 45,
    position: "absolute",
    backgroundColor: '#fafafa',
    width: "95%",
    zIndex: 3,
    bottom: 30,
    alignContent: "center",
    alignSelf: "center",
    shadowOpacity: 1.0,
    borderRadius: 15,
    shadowColor: '#dddddd',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4
  },

  map_bottom_stripText: {
    width: "100%",
    padding: 10,
    color: colors.Blue,
    fontFamily: 'GillSans-Medium',
    fontWeight: '700',
    fontSize: 14,
    textAlignVertical: 'center',
    textAlign: 'center'
  },

  locateMe: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowOpacity: 1.0,
    shadowColor: '#dddddd',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4,
  },


  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    zIndex: 3,
    position: 'absolute',
    marginTop: -55,
    marginLeft: -15,
    left: '50%',
    top: '50%'
  },

});