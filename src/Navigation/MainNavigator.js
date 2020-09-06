import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import RacersList from '../Screens/RacersList';
import CurrentRacerProfile from '../Screens/CurrentRacerProfile';
import CurrentRacerRaces from '../Screens/CurrentRacerRaces';

const MainNavigator = createStackNavigator();

const MainNavigatorContainer = (props) => {
    return (
        <MainNavigator.Navigator headerMode='none' screenOptions={{...TransitionPresets.SlideFromRightIOS}}>
            <MainNavigator.Screen name={'RacersList'} component={RacersList}/>
            <MainNavigator.Screen name={'CurrentRacerProfile'} component={CurrentRacerProfile}/>
            <MainNavigator.Screen name={'CurrentRacerRaces'} component={CurrentRacerRaces}/>
        </MainNavigator.Navigator>
    )
}

export default MainNavigatorContainer;