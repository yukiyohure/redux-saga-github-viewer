import { call, put, takeLatest } from "redux-saga/effects";
import { fetchIssueData, createIssue } from "../utils/apiRequest";
import { FETCH_ISSUE_REQUEST, requestIssueSuccess, CREATE_ISSUE_REQUEST } from "../actions";

function* fetchIssueList() {
  try {
    // call()は第一引数にsagaで実行したい関数を指定、第二引数でその関数の引数に渡したい値を記載する
    const issueData = yield call(fetchIssueData);
    yield put(requestIssueSuccess(issueData));
  } catch (e) {
    console.log(e);
  }
}

function* createIssueItem(action) {
  try {
    yield call(createIssue, action.payload);
    yield put({type: FETCH_ISSUE_REQUEST});
  } catch (e) {
    console.log(e);
  }
}

export default function* issueSaga() {
  yield takeLatest(FETCH_ISSUE_REQUEST, fetchIssueList);
  yield takeLatest(CREATE_ISSUE_REQUEST, createIssueItem);
}
