import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {useDispatch} from 'react-redux';
import {scanSuccess} from '../Store/Actions/index';

const ScanScreen = ({navigation}) => {

  const dispatch = useDispatch();
  const onSuccess = e => {
    dispatch(scanSuccess(e.data,navigation));
  };
  const cancelScan = () => {
    navigation.goBack();
  };
  return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <QRCodeScanner
                reactivate={true}
                showMarker={true}
                ref={node => {
                  scanner = node;
                }}
                onRead={onSuccess}
                topContent={
                  <Text style={styles.centerText}>Scan your QRCode!</Text>
                }
                bottomContent={
                  <TouchableOpacity
                    style={styles.buttonTouchable}
                    onPress={cancelScan}>
                    <Text style={styles.buttonText}>Cancel Scan</Text>
                  </TouchableOpacity>
                }
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    borderRadius: 100,
    width: '50%',
    height: '50%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textTransform:'capitalize',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    textTransform:'capitalize',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  centerText: {
    flex: 1,
    fontSize: 20,
    padding: 32,
    color: Colors.primary,
    zIndex: 100,
    fontWeight: '900',
  },
  textBold: {
    fontWeight: 'bold',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  scannerBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScanScreen;
