import _ from 'lodash';
import { FETCH_WEATHER } from '../actions/index';
import { REMOVE_CITY } from '../actions/action_remove_city';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // expression returns new array with additional element
            return [ action.payload.data, ...state ];
        case REMOVE_CITY:
            const city = action.payload;
            return _.filter(state, item => item.city.name !== city.name);
    }
    return state;
}