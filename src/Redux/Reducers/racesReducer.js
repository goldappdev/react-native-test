import * as Constants from '../Constants';

const initialState = {}

export default function racesReducer(state = initialState, action) {
    switch(action.type) {
        case Constants.SET_RACES: {
            console.log({
                ...state,
                [action.racer]: action.races
            })
            return {
                ...state,
                [action.racer]: action.races
            }
        }
        default: {
            return state
        }
    }
}