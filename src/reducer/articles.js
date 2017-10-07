import defaultArticles from '../fixtures'
import {DELETE_ARTICLE, FILTER_DATE_ARTICLE, SELECTED_ARTICLE} from '../constants'

export default (articleState = defaultArticles, action) => {
    const {type, payload} = action;
    switch (type) {
        case DELETE_ARTICLE:
            return articleState.filter(article => article.id !== payload.id);
        case SELECTED_ARTICLE:
            const selected = payload.selected.map(item => item.value);
            if(selected.length < 1){
                return articleState.map(article => {
                    return Object.assign({}, article, {hideUnselected: false});
                });
            }
            return articleState.map(article => {
                return Object.assign({}, article, {hideUnselected: !selected.includes(article.id)});
            });
        case FILTER_DATE_ARTICLE:
            return articleState.map(article => {
                const articleDate = new Date(article.date);
                let hide = false;
                if(isNaN( articleDate.getTime() )){
                    return article;
                }
                if(payload.from && payload.from > articleDate){
                    hide = true;
                }
                if(payload.to && payload.to < articleDate){
                    hide = true;
                }
                return Object.assign({}, article, {hide});
            });
    }
    return articleState;
}