// action type を定数で定義するメリット
// https://redux.js.org/recipes/reducing-boilerplate#actions

export const ADD_ISSUE = "ADD_ISSUE";
export const EDIT_ISSUE = "EDIT_ISSUE";
export const DELETE_ISSUE = "DELETE_ISSUE";
export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

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
