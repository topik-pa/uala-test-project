import {  CONSTANTS } from './constants'
import { v4 } from 'uuid';

export const removeColor = id =>
({
    type: CONSTANTS.REMOVE_COLOR,
    id
})

export const rateColor = (id, rating) =>
({
    type: CONSTANTS.RATE_COLOR,
    id,
    rating
})

export const addColor = (title, color) =>
({
    type: CONSTANTS.ADD_COLOR,
    id: v4(),
    title,
    color,
    timestamp: new Date().toString()
})