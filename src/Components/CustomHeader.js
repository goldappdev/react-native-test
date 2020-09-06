import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CustomHeader = ({ label, goBack }) => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonHolder}>

            </View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.buttonHolder}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#9b59b6'
    },
    buttonHolder: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default CustomHeader;