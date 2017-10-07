import {FILTER_SELECTED} from '../constants'

export default function filterSelectedReducer(selected = null, action) {
    const {type, payload} = action;
    return type === FILTER_SELECTED ? payload.selected : selected;
};