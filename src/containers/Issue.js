import {
  addIssue,
  editIssue,
  deleteIssue,
  hideModal,
  showModal,
} from "../actions";
import { connect } from "react-redux";
import Issue from "../components/templates/Issue";

const mapStateToProps = (state) => {
  // Contentsコンポーネント内で使用するstateを限定する役目
  return {
    // stateオブジェクトから指定できるのは、src/reducers/index.js でrootReducerにまとめたときのオブジェクトのkey名
    // key名がコンポーネントで受け取るpropsの名前になる
    issueData: state.issue.data,
    profile: state.profile,
  };
};

// Contentsコンポーネントからdispatchするときに、わざわざ `dispatch(actionCreator(追加したい要素))`しなくても、
// この場合だと `addContents(追加したい要素)` でstoreにdispatchできるようになる
const mapDispatchToProps = (dispatch) => {
  return {
    addIssue: (payload) => {
      dispatch(addIssue(payload));
    },
    editIssue: (payload) => {
      dispatch(editIssue(payload));
    },
    deleteIssue: (payload) => {
      dispatch(deleteIssue(payload));
    },
    showModal: (component) => {
      dispatch(showModal(component));
    },
    hideModal: () => {
      dispatch(hideModal());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Issue);
