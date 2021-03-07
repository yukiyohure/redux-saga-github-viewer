// action type を定数で定義するメリット
// https://redux.js.org/recipes/reducing-boilerplate#actions

export const ADD_ISSUE = "ADD_ISSUE";
export const EDIT_ISSUE = "EDIT_ISSUE";
export const DELETE_ISSUE = "DELETE_ISSUE";
export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

// manipulate data from api
export const FETCH_ISSUE_REQUEST = "FETCH_ISSUE_REQUEST";
export const FETCH_ISSUE_SUCCEEDED = "FETCH_ISSUE_SUCCEEDED";
export const FETCH_ISSUE_FAILED = "FETCH_ISSUE_FAILED";
export const CREATE_ISSUE_REQUEST = "CREATE_ISSUE_REQUEST";
export const CREATE_ISSUE_SUCCEEDED = "CREATE_ISSUE_SUCCEEDED";
export const CREATE_ISSUE_FAILED = "CREATE_ISSUE_FAILED";
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCEEDED = "FETCH_USER_SUCCEEDED";
export const FETCH_USER_FAILED = "FETCH_USER_FAILED";

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
    payload: { id },
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

export const requestIssue = () => {
  return {
    type: FETCH_ISSUE_REQUEST,
  };
};

export const requestIssueSuccess = (data) => {
  return {
    type: FETCH_ISSUE_SUCCEEDED,
    data: data,
  };
};

export const requestIssueFailed = (error) => {
  return {
    type: FETCH_ISSUE_FAILED,
    error: error,
  };
};

export const requestUser = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const requestUserSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCEEDED,
    data: data,
  };
};

export const requestUserFailed = (error) => {
  return {
    type: FETCH_USER_FAILED,
    error: error,
  };
};

export const createIssue = (data) => {
  return {
    type: CREATE_ISSUE_REQUEST,
    payload: data
  };
}

export const createIssueSuccess = (data) => {
  return {
    type: CREATE_ISSUE_SUCCEEDED,
    payload: data,
  };
};

export const createIssueFailed = (error) => {
  return {
    type: CREATE_ISSUE_FAILED,
    payload: error,
  };
};
