import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
//line below just imports a feature and saves it as a variable
import {reducer as formReducer} from 'redux-form';


const rootReducer = combineReducers({
    posts: PostsReducer,
    form: formReducer
});

export default rootReducer;
