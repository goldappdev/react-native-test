import React, { useEffect } from 'react';
import MainNavigator from './Navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/Store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { testAPIModules } from './API/APIWrapper'
import axios from 'axios';

const App = () => {

	useEffect(() => {
		axios.defaults.baseURL = 'https://ergast.com/api/f1'

		Platform.OS == 'android' && StatusBar.setBackgroundColor('#9b59b6', true);
		StatusBar.setBarStyle('light-content', true);

		testAPIModules()
	}, []);

	return (
		<NavigationContainer>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					{
						bootstraped => {
							if(bootstraped) {
								return (
									<MainNavigator/>
								)
							}
							
							return null
						}
					}
				</PersistGate>
			</Provider>
		</NavigationContainer>
	)
}

export default App;