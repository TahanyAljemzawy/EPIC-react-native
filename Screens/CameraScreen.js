import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
//import * as tf from '@tensorflow/tfjs';
//import { fetch } from '@tensorflow/tfjs-react-native';
import Header from '../Components/Header';
import { Constants } from 'react-native-unimodules';

const CameraScreen = () => {

const [isTfReady, setIsTfReady] = useState(false);
useEffect(() => {
    //await tf.ready();
    setIsTfReady(true)
    console.log(Constants.systemFonts);

}, [])

    return (
        <>
        <Header
        title={strings('headersName.home')}
        nav={props.navigation}
      />
        <View style={styles.container}>
            <Text>Is TF Ready BB? {isTfReady} </Text>
        </View>
        </>
    )
}

export default CameraScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      }
})
