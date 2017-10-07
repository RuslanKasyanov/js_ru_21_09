import React, { Component } from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {filterSelected, selectedArticle} from '../../AC'
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {


    handleChange = selected => {
        const actionFilterSelected = filterSelected( { selected });
        this.props.dispatch(actionFilterSelected);
        const actionSelectedArticle = selectedArticle( { selected });
        this.props.dispatch(actionSelectedArticle);
    };
    render() {
        const { articles, selected } = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

const mapStateToProps = (state) => ({
    articles: state.articles,
    selected: state.selected
});
export default connect(mapStateToProps)(SelectFilter);