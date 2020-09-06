import React from 'react';
import { SafeAreaView, View, FlatList, Text, StyleSheet, Platform, ScrollView, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import CustomHeader from '../Components/CustomHeader';

const CurrentRacerProfile = (props) => {
    const racer = props.route.params.racer

    return (
        <View style={styles.container}>
            {
                Platform.OS == 'ios' && <View style={styles.bar}/>
            }
            <CustomHeader label={racer.givenName + ' ' + racer.familyName}/>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
                    <Image source={require('../Assets/racer.jpg')} style={styles.image}/>
                    <View style={styles.dataHolder}>
                        <Text style={styles.name}><Text style={styles.nameStaticText}>First Name: </Text>{racer.givenName}</Text>
                        <Text style={styles.name}><Text style={styles.nameStaticText}>Last Name: </Text>{racer.familyName}</Text>
                        <Text style={styles.name}><Text style={styles.nameStaticText}>Date Of Birth: </Text>{racer.dateOfBirth}</Text>
                        <Text style={styles.name}><Text style={styles.nameStaticText}>Nationality: </Text>{racer.nationality}</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    bar: {
        height: getStatusBarHeight(),
        backgroundColor: '#9b59b6'
    },
    scrollView: {
        flex: 1
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 200,
        resizeMode: 'contain'
    },
    contentContainer: {
        alignItems: 'center',
        paddingVertical: 30
    },
    dataHolder: {
        width: '90%',
        marginTop: 30
    },
    nameStaticText: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 28
    },
    name: {
        fontSize: 16
    }
})

export default CurrentRacerProfile;