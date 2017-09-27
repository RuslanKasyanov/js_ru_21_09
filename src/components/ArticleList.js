import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'

class ArticleList extends Component {
    state = {
        openArticleId: null
    }

    render() {
        const {articles} = this.props
        if (!articles.length) return <h3>No Articles</h3>
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === this.state.openArticleId}
                     onButtonClick={this.toggleArticle(article.id)}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    toggleArticle = (openArticleId) => (ev) => {
        const id = this.state.openArticleId === openArticleId ? null :  openArticleId;
        this.setState({openArticleId: id});
    }
}


ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default ArticleList