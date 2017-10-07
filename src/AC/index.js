import {INCREMENT, DELETE_ARTICLE, CHANGE_DATE, FILTER_DATE_ARTICLE, FILTER_SELECTED, SELECTED_ARTICLE} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function filterDateArticle(dates) {
    return {
        type: FILTER_DATE_ARTICLE,
        payload: dates
    }
}

export function selectedArticle (selected) {
    return {
        type: SELECTED_ARTICLE,
        payload: selected
    }
}

export function filterSelected (selected) {
    return {
        type: FILTER_SELECTED,
        payload: selected
    }
}

export function changeDate(dates) {
    return {
        type: CHANGE_DATE,
        payload: dates
    }
}