import {combineReducers} from 'redux';
import counterReducer from './counter';
import articles from './articles';
import changeDate from './changeDate';
import selected from './selected';

export default combineReducers({
    counter: counterReducer,
    articles,
    changeDate,
    selected
})