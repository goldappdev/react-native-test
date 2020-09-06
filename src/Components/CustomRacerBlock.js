import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const CustomRacerBlock = ({ toRacer, racer, toRaces }) => {
    
    const handleToRacer = () => {
        toRacer(racer);
    }

    const handleToRaces = () => {
        toRaces(racer)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.mainButton} onPress={handleToRacer}>
                <Image style={styles.avatar} source={require('../Assets/racer.jpg')}/>
                <View style={styles.racerName}>
                    <Text style={styles.lastName}>{racer.familyName}</Text>
                    <Text style={styles.firstName}>{racer.givenName}</Text>
                </View>
                <View style={styles.spacer}/>
                <TouchableOpacity style={styles.nestedButton} onPress={handleToRaces}>
                    <Text style={styles.nestedButtonText}>Races</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainButton: {
        width: '90%',
        height: 60,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: '#9b59b6',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    avatar: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
        borderRadius: 200
    },
    racerName: {
        marginLeft: 10
    },
    lastName: {
        fontWeight: 'bold',
        fontSize: 17
    },
    firstName: {
        fontSize: 14
    },
    spacer: {
        flex: 1
    },
    nestedButton: {
        backgroundColor: '#9b59b6',
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    nestedButtonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default CustomRacerBlock;