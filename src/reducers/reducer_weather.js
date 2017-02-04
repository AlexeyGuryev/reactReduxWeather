import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // expression returns new array with additional element
            return [ action.payload.data, ...state ];
    }
    return state;
}