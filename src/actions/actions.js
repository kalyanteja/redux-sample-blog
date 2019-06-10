export function addComment(comment) {
    return {
        type: "ADD_COMMENT",
        payload: comment
    };
}

export function changeComment(comment) {
    return {
        type: "CHANGE_COMMENT",
        payload: comment
    };
}

export function changeName(name) {
    return {
        type: "CHANGE_NAME",
        payload: name
    };
}

export function deleteComment(comment) {
    return {
        type: "DELETE_COMMENT",
        payload: comment
    };
}