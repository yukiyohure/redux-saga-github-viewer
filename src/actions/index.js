// action type を定数で定義するメリット
// https://redux.js.org/recipes/reducing-boilerplate#actions

export const ADD_ISSUE = "ADD_ISSUE";
export const EDIT_ISSUE = "EDIT_ISSUE";
export const DELETE_ISSUE = "DELETE_ISSUE";
export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

// saga
export const FETCH_ISSUE_REQUEST = "FETCH_ISSUE_REQUEST";
export const FETCH_ISSUE_SUCCEEDED = "FETCH_ISSUE_SUCCEEDED";
export const FETCH_ISSUE_FAILED = "FETCH_ISSUE_FAILED";


export const addIssue = (newData) => {
  return {
    type: ADD_ISSUE,
    payload: newData,
  };
};

export const editIssue = (newData) => {
  return {
    type: EDIT_ISSUE,
    payload: newData,
  };
};

export const deleteIssue = (id) => {
  return {
    type: DELETE_ISSUE,
    payload: {id},
  };
};

export const showModal = ({ component }) => {
  return {
    type: SHOW_MODAL,
    payload: component,
  };
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL,
  };
};

export const requestedIssue = () => {
  return {
    type: FETCH_ISSUE_REQUEST,
  };
}

export const requestIssueSuccess = (data) => {
  return {
    type: FETCH_ISSUE_SUCCEEDED,
    data: data,
  };
}

