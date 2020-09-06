import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, Text, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import CustomHeader from '../Components/CustomHeader';
import { useDispatch, useSelector } from 'react-redux';
import { setRaces } from '../Redux/Actions'

const CurrentRacerRaces = (props) => {
    const racer = props.route.params.racer;
    const dispatch = useDispatch();
    const races = useSelector(state => {
        return state.races[racer.driverId]
    });
    const [isLoading, setIsLoading] = useState(false);

    const getRaces = () => {
        setIsLoading(true)

        dispatch(setRaces(racer.driverId, () => setIsLoading(false)))
    }

    const getDate = (date) => {
        return date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();
    }

    useEffect(() => {
        getRaces();
    }, [])

    return (
        <View style={styles.container}>
            {
                Platform.OS == 'ios' && <View style={styles.bar}/>
            }
            <CustomHeader label={racer.givenName + ' ' + racer.familyName + ' Races'}/>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={races}
                    style={styles.list}
                    keyExtractor={(race, id) => race.date}
                    refreshing={isLoading}
                    onRefresh={getRaces}
                    renderItem={({item}) => {
                        console.log(item)
                        return (
                            <View style={styles.upperRace}>
                                <View style={styles.race}>
                                    <Text style={styles.text}>Location: {item.Circuit.circuitName}</Text>
                                    <View style={styles.info}>
                                        <Text style={styles.text}>Date:</Text>
                                        <View style={styles.spacer}/>
                                        <Text style={styles.text}>{getDate(new Date(item.date))}</Text>
                                    </View>
                                    <View style={styles.info}>
                                        <Text style={styles.text}>Result:</Text>
                                        <View style={styles.spacer}/>
                                        <Text style={styles.text}>{item.Results[0].position + ' (' + item.Results[0].status + ')'}</Text>
                                    </View>
                                    <View style={styles.info}>
                                        <Text style={styles.text}>Race Name:</Text>
                                        <View style={styles.spacer}/>
                                        <Text style={styles.text}>{item.raceName}</Text>
                                    </View>
                                </View>
                            </View>
                        )
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
    bar: {
        height: getStatusBarHeight(),
        backgroundColor: '#9b59b6'
    },
    list: {
        flex: 1,
        backgroundColor: 'white'
    },
    upperRace: {
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    race: {
        width: '90%',
        borderRadius: 30,
        borderWidth: 3,
        borderColor: '#9b59b6',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    spacer: {
        flex: 1
    },
    text: {
        fontWeight: 'bold'
    },
    info: {
        flexDirection: 'row'
    }
})

export default CurrentRacerRaces;