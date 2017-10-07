import {CHANGE_DATE} from '../constants'

export default function changeDateReducer(state = {from: null, to: null}, action) {
    const {type, payload} = action;
    return type === CHANGE_DATE ? payload : state;
};
