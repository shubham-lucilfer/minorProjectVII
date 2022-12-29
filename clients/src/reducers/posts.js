import { UPDATE, FETCH_ALL, CREATE, DELETE, LIKE, FETCH_BY_SEARCH } from '../constants/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case UPDATE:
        case LIKE:
            return state.map((post) => (post._id === action.payload._id ? action.payload : post));
                
        case FETCH_ALL:
            return action.payload;
        case  FETCH_BY_SEARCH:
            return {...state, posts : action.payload};   
        case CREATE:
            return [...state, action.payload];
        case DELETE:
            return state.filter((post) => (post._id !== action.payload));
        default:
            return state;
    }
} 