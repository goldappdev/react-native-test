import { getRacersList, getDriverRaces } from '../API/APIWrapper';
import * as Constants from './Constants'

const setRacers = (racers, page) => ({
    type: Constants.UPDATE_RACERS_LIST,
    data: racers,
    page: page
})

const setDriverRaces = (racer, races) => ({
    type: Constants.SET_RACES,
    races,
    racer
})

export const getRacers = (page, callback) => {
    return dispatch => {
        getRacersList(page)
        .then(result => {
            dispatch(setRacers(result.data.MRData.DriverTable.Drivers, page + 1))
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            callback();
        })
    }
}

export const setRaces = (racer, callback) => {
    return dispatch => {
        getDriverRaces(racer)
        .then(result => {
            dispatch(setDriverRaces(racer, result.data.MRData.RaceTable.Races))
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            callback();
        })
    }
}