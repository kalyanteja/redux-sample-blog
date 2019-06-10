import {createStore} from 'redux';
import reducer from './reducers/reducer';

const emptyState = {
    comments: [
        {
        comment: "First comment goes here",
        username: "Freddie M."
        },
        {
        comment: "Second comment is written",
        username: "Michael Jackson"
        },
    ],
    username: "",
    currentComment: ""
}

export default createStore(reducer, emptyState);