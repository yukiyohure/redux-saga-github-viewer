// import rootReducer from "../reducers";
import { connect } from "react-redux";
// import * as actions from "../actions";
import Profile from "../pages/Profile";

const mapStateToProps = (state) => {
  return {
    user: state.profile,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
