import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Login from "./Login";
import {
  getUserId,
  getUserEmail,
  getUserName,
  getUserPicture
} from "../../redux/selectors/user-selector";

import { setUserAction, resetUserAction } from "../../redux/actions/user-actions";

const mapStateToProps = (state) => {
  const userId = getUserId(state);
  const userEmail = getUserEmail(state);
  const userName = getUserName(state);
  const userPicture = getUserPicture(state);
  return { userId, userEmail, userName, userPicture};

};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setUserAction,
      resetUserAction
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
