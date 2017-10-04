import React, {Component} from 'react';
import 'react-select/dist/react-select.css';
import './style.css'

class ComponentForm extends Component {
    state = {
        username: '',
        comment: '',
        userError: false,
        commentError: false,
    };

    render() {

        const {comment, username, userError, commentError} = this.state;

        return (
            <form>
                <h4>Add comment</h4>
                <p>User: <input type = 'text' value = {username}  className={userError ? 'invalid' : ''} onChange = {this.handleUserChange}/></p>
                <p>Comment: <textarea  value = {comment}  className={commentError ? 'invalid' : ''} onChange = {this.handleCommentChange}/></p>
                <p><button type="button" onClick={this.onSubmit}>submit</button></p>
            </form>
        )
    }

    onSubmit = () => {
        if(this.state.userError || this.state.commentError){
           return;
        }
        this.setState({
            username: '',
            comment: ''
        })
    };
    handleUserChange = ev => {
        let invalid = false;
        const value = ev.target.value;
        if(value.length < 10  || value.length > 50){
            invalid = true;
        }
        this.setState({
            userError: invalid,
            username: value
        })
    };
    handleCommentChange = ev => {
        let invalid = false;
        const value = ev.target.value;
        if(value.length < 10  || value.length > 50){
            invalid = true;
        }
        this.setState({
            commentError: invalid,
            comment: value
        })
    }
}

export default ComponentForm;