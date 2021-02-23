import { receiveIssue } from "./actions";
import { call, all, put } from "redux-saga/effects";
import { fetchIssueData } from "./utils/apiRequest";

function* getIssueData() {
  try{
    // call()は第一引数にsagaで実行したい関数を指定、第二引数でその関数の引数に渡したい値を記載する
    // 今回は単純にAPIへgetするだけなので第二引数は必要ない。
    const issueData = yield call(fetchIssueData);
    yield put(receiveIssue(issueData));
  } catch(e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield all([
    getIssueData,
  ]);
}