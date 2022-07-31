import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Profile from "./Profile";
import { fetchProfileAction } from "../../redux/actions/fetch-profile-action";
import { updateProfileAction } from "../../redux/actions/update-profile-action";
import { getProfile } from "../../redux/selectors/profile-entity-selector";
import {
  getUserId,
  getUserEmail,
  getUserName,
  getUserPicture
} from "../../redux/selectors/user-selector";

const mapStateToProps = (state) => {
  let profile = getProfile(state);
  const userId = getUserId(state);
  const userEmail = getUserEmail(state);
  const userName = getUserName(state);
  const userPicture = getUserPicture(state);
  return { profile, userId, userEmail, userName, userPicture};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchProfileAction, updateProfileAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
