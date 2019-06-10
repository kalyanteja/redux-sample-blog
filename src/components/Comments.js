import React from 'react';
import Comment from './Comment';

function Comments(props){
    const comments = props.comments.map(function(comm){
        return <Comment key={comm.username} comment={ comm } deleteComment={props.deleteComment} />
      });

    return (
        <div>
            {comments}
        </div>
    );
}

export default Comments;