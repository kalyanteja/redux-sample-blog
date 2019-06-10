const reducer = (state, action) => {
    switch(action.type){
      case "CHANGE_COMMENT":
        state = {
            ...state,
            currentComment: action.payload
        }
        break;
      case "ADD_COMMENT":
        state = {
            ...state,
            comments: [...state.comments, action.payload],
            currentComment: "",
            username: ""
        }
        break;
      case "DELETE_COMMENT":
        const updatedComments = state.comments.filter(comm => comm.comment !== action.payload.comment)
        state = {
          ...state,
          comments: updatedComments
        }
        break;
      case "CHANGE_NAME":
        state = {
            ...state,
            username: action.payload
        }
        break;
      default:
        break;
    }

    return state;
};

export default reducer;