import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import CustomHeader from '../Components/CustomHeader';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import CustomRacerBlock from '../Components/CustomRacerBlock';
import { useSelector, useStore, useDispatch } from 'react-redux';
import { getRacers as getRacersList } from '../Redux/Actions';

const RacersList = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const racersState = useSelector(state => {
        return state.racers
    });

    const getRacers = (flushAllResults = false) => {
        setIsLoading(true)
        
        dispatch(getRacersList(
            flushAllResults ? 1 : racersState.currentPage, 
            () => setIsLoading(false)
        ))
    };

    const handleToRacer = (racer) => {
        props.navigation.navigate('CurrentRacerProfile', {
            racer
        })
    };

    const handleToRaces = (racer) => {
        props.navigation.navigate('CurrentRacerRaces', {
            racer
        })
    };

    useEffect(() => {
        getRacers()
    }, []);

    return (
        <View style={styles.container}>
            {
                Platform.OS == 'ios' && <View style={styles.bar}/>
            }
            <CustomHeader label={'Racers'}/>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={racersState.racersArray}
                    refreshing={isLoading}
                    onRefresh={() => getRacers(true)}
                    style={styles.list}
                    keyExtractor={(racer, index) => new String(racer.driverId) + racer.familyName + racer.givenName + racer.dateOfBirth + index}
                    onEndReachedThreshold={0.05}
                    onEndReached={() => getRacers()}
                    renderItem={({item}) => {
                        return <CustomRacerBlock racer={item} toRacer={handleToRacer} toRaces={handleToRaces}/>
                    }}
                />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    list: {
        flex: 1,
        backgroundColor: 'white'
    },
    bar: {
        height: getStatusBarHeight(),
        backgroundColor: '#9b59b6'
    }
})

export default RacersList;