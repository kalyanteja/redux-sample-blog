import React from 'react';
import '../App.css';

function Comment(props){
    return (
        <div className="comment-section">
            <div>
                <h5>{props.comment.comment}</h5>
                <h6><small>by </small>{props.comment.username}</h6>
            </div>
            <div className="comment-section-icon">
                <i className="fa fa-trash" onClick={() => props.deleteComment(props.comment.comment)}></i>
            </div>
        </div>
    );
}

export default Comment;