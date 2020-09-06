import * as Constants from '../Constants';

const racersArray = {
    currentPage: 1,
    racersArray: []
}

export default function racersReducer (state = racersArray, action) {
    switch(action.type) {
        case Constants.UPDATE_RACERS_LIST: {

            if(action.page == 2) {
                return {
                    currentPage: action.page,
                    racersArray: action.data
                }
            }
            else {
                return {
                    currentPage: action.page,
                    racersArray: [...new Set([...state.racersArray, ...action.data])]
                }
            }
        }
        default: {
            return state
        }
    }
}