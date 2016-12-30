import {FETCH_POSTS, FETCH_POST} from '../actions/index';

const INITIAL_STATE = { all: [], post: null};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        
        case FETCH_POST:
        console.log(action.payload.data, 'from action');
            return {...state, post: action.payload.data};

        case FETCH_POSTS:
        //line below is ES6 syntax to return a new state
            return {...state, all: action.payload.data};

        default: return state;
    }
}
