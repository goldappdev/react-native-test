import AsyncStorage from '@react-native-community/async-storage';
import reduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import racersReducer from './Reducers/racersReducer';
import racesReducer from './Reducers/racesReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: []
}

const middleware = [];
const enhancers = [];

middleware.push(reduxThunk);
  
const persistedReducer = persistReducer(persistConfig, combineReducers({
    racers: racersReducer,
    races: racesReducer
}));

enhancers.push(applyMiddleware(...middleware));

export const store = createStore(persistedReducer, compose(...enhancers));
export const persistor = persistStore(store);