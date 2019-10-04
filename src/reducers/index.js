import { combineReducers } from 'redux';
import registration from './registration'
import authenication from './authenication';

const myReducer = combineReducers({
    registration,
    authenication
})
export default myReducer;