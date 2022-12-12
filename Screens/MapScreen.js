import React from 'react';
import {View, Text,  StyleSheet} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Header from '../Components/Header';
import Colors from '../constants/Colors';
import {strings} from '../Languages/i18ln';

const MapScreen = ({navigation}) => {


  return (
    <>
      <Header
        title={strings('headersName.map')}
        back={true}
        nav={navigation}
        color={Colors.primary}
      />

      <View style={styles.sectionContainer}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, 'details');
        }}

        query={{
            key: 'YOUR API KEY',
            language: 'en',
          }}

        debounce={200} 
        minLength={2} 
        autoFocus={true}
 
        styles={{
          container: {
            width: '90%',
            marginVertical: 15,
            
          },
          textInputContainer: {
            flexDirection: 'row',
          },
          textInput: {
            backgroundColor: '#FFFFFF',
            height: 44,
            borderRadius: 5,
            paddingVertical: 5,
            paddingHorizontal: 10,
            fontSize: 15,
            flex: 1,
          },
          poweredContainer: {
            justifyContent: 'flex-end',
            alignItems: 'center',
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderColor: '#c8c7cc',
            borderTopWidth: 0.5,
          },
          powered: {},
          listView: {},
          row: {
            backgroundColor: '#FFFFFF',
            padding: 13,
            height: 44,
            flexDirection: 'row',
          },
          separator: {
            height: 0.5,
            backgroundColor: '#c8c7cc',
          },
          description: {},
          loader: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            height: 20,
          },
        }}
      />
      </View>
    </>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
    sectionContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ccc',
    },
})