import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentList extends Component {
    state = {
        openComments: false
    };

    render() {
        const {comments} = this.props;
        if (!comments.length) return <h3>No Comments</h3>;
        let body, textButton;
        if(this.state.openComments){
            const commentElements = comments.map((item) => <li key={item.id}>
                <Comment comment={item} />
            </li>);
            body =  <ul>{commentElements} </ul>;
            textButton = 'Hide Comment';
        } else {
            body =  '';
            textButton = 'Show Comment';
        }
        return (
            <div>
                <button onClick={() =>this.setState({openComments: !this.state.openComments})}>{textButton}</button>
                {body}
            </div>
        )
    }

}
CommentList.defaultProps = {
    comments: []
};
export default CommentList;