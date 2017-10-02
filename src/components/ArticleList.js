import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import openItemId from '../decorators/openItemId'
function ArticleList (props){
     const {articles, toggleId, openArticleId} = props;
    if (!articles.length) return <h3>No Articles</h3>;
    const articleElements = articles.map((article) => <li key={article.id}>
        <Article article={article}
                 isOpen={article.id === openArticleId}
                 onButtonClick={toggleId(article.id)}
        />
    </li>);
    return (
        <ul>
            {articleElements}
        </ul>
    )
}

ArticleList.defaultProps = {
    articles: []
};

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default openItemId(ArticleList)