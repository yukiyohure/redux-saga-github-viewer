import { call, put, takeLatest } from "redux-saga/effects";
import { fetchIssueData } from "../utils/apiRequest";
import { FETCH_ISSUE_REQUEST, requestIssueSuccess } from "../actions";

function* fetchIssueList() {
  try {
    // call()は第一引数にsagaで実行したい関数を指定、第二引数でその関数の引数に渡したい値を記載する
    // issueのstateが'open'と'closed'どちらも取得したいのでstateパラメーターにallを渡す。
    const issueData = yield call(fetchIssueData, { state: "all" });
    yield put(requestIssueSuccess(issueData));
  } catch (e) {
    console.log(e);
  }
}

export default function* issueSaga() {
  yield takeLatest(FETCH_ISSUE_REQUEST, fetchIssueList);
}
