import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.shape({
            title: PropTypes.string,
            text: PropTypes.string
        }).isRequired
    }

    render() {
    const {comment} = this.props;
    return (
        <div>
            <h4>{comment.user}</h4>
            <p>{comment.text}</p>
        </div>
        )
    }
}
export default Comment;