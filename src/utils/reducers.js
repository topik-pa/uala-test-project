import { CONSTANTS } from './constants'
import { color } from './color'

export const colors = (state = [], action) => {
    switch (action.type) {
        case CONSTANTS.ADD_COLOR:
            return [
                ...state,
                color({}, action)
            ]
        case CONSTANTS.RATE_COLOR:
            return state.map(
                c => color(c, action)
            )
        case CONSTANTS.REMOVE_COLOR:
            return state.filter(
                c => c.id !== action.id
            )
        default:
            return state
    }
}

export const sort = (state = "SORTED_BY_DATE", action) => {
    switch (action.type) {
        case CONSTANTS.SORT_COLOR:
            return action.sortBy
        default:
            return state
    }
}