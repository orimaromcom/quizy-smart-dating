import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Profile from "./Profile";
import { fetchProfileAction } from "../../redux/actions/fetch-profile-action";
import { updateProfileAction } from "../../redux/actions/update-profile-action";
import { userLogoutAction } from "../../redux/actions/user-logout-action";
import { getProfile } from "../../redux/selectors/profile-entity-selector";

const mapStateToProps = (state) => {
  let profile = getProfile(state);
  return { profile };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchProfileAction, updateProfileAction, userLogoutAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
