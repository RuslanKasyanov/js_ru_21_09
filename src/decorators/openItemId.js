import React, {Component as ReactComponent} from 'react'

export default (ComponentWithOpenArticleId) => class ComponentWithToggleId extends ReactComponent {
    state = {
        openArticleId: null
    };
    toggleArticle = (openArticleId) => {
        if (this.memoized.get(openArticleId)) return this.memoized.get(openArticleId);
        const func = (ev) => {
            this.setState({
                openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
            });
        };
        this.memoized.set(openArticleId, func);
        return func;
    };
    render() {
        return <ComponentWithOpenArticleId
            {...this.props}
            openArticleId = {this.state.openArticleId}
            toggleId = {this.toggleArticle}
        />
    };
    memoized = new Map();
}