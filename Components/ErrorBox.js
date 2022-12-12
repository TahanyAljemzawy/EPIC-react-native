import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ErrorBox = ({errorMsg}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.errorText}>{errorMsg}</Text>
        </View>
    )
}

export default ErrorBox

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      },
    errorText:{
        fontSize:20,
        color:'red',
        fontWeight:'bold'
    }  
})
