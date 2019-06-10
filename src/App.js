import React from 'react';
import './App.css';
import Comments from './components/Comments';
import {connect} from 'react-redux';
import {addComment, changeComment, changeName, deleteComment} from './actions/actions';

class App extends React.Component {
  
  constructor(){
    super();
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  handleCommentChange(event){
    this.props.changeComment(event.target.value);
  }

  handleNameChange(event){
    this.props.changeName(event.target.value);
  }

  addComment(){
    const username = this.props.username;
    const comment = this.props.currentComment;
    const newComment = {
      comment,
      username
    };

    this.props.addComment(newComment);
  }

  deleteComment(comment){
    const commToDel = this.props.comments.find(comm => comm.comment === comment);
    this.props.deleteComment(commToDel);
  }

  render(){
    return (
      <div>
        <header className="App-header">
          <div className="comments-section">
            <p style={{fontSize: 20 + 'px'}}>
              How do you vacuum plastic from a beach? (bbc.co.uk)
            </p>

            <Comments comments={this.props.comments} deleteComment={this.deleteComment}></Comments>
          </div>
          <div className="comments-section">
            <textarea className="add-comment" value={this.props.currentComment} onChange={this.handleCommentChange} placeholder="Add your comment"></textarea>
            <input type="text" className="add-comment-button" value={this.props.username} onChange={this.handleNameChange} placeholder="Your name"></input>
            <button className="add-comment-button" onClick={() => this.addComment()}>Add comment!</button>
          </div>
        </header>
        
  
      </div>
    );
  }  
}

const mapStateToProps = (state) => {
  return {
      username: state.username,
      currentComment: state.currentComment,
      comments: state.comments
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeComment: (comment) => {
            dispatch(changeComment(comment));
        },
        addComment: (comment) => {
          dispatch(addComment(comment));
        },
        changeName: (comment) => {
          dispatch(changeName(comment));
        },
        deleteComment: (comment) => {
          dispatch(deleteComment(comment));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
