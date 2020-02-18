import React from 'react';
import { StyleSheet, Text, View,StatusBar,ActivityIndicator } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <Text style= {styles.text}>Getting the fucking weather</Text>
            <ActivityIndicator size="large" color="black" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF6AA',
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100
    },
    text:{
        color:"#2c2c2c",
        fontSize:30
    },
});
