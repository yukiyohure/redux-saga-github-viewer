import { call, put, takeLatest } from "redux-saga/effects";
import { fetchIssueData } from "../utils/apiRequest";
import { FETCH_ISSUE_REQUEST, requestIssueSuccess } from "../actions";

function* getIssueData() {
  try {
    // call()は第一引数にsagaで実行したい関数を指定、第二引数でその関数の引数に渡したい値を記載する
    // 今回は単純にAPIへgetするだけなので第二引数は必要ない。
    const issueData = yield call(fetchIssueData);
    yield put(requestIssueSuccess(issueData));
  } catch (e) {
    console.log(e);
  }
}

export default function* issueSaga() {
  yield takeLatest(FETCH_ISSUE_REQUEST, getIssueData);
}
