import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Profile from "./Profile";
import { fetchProfileAction } from "../../redux/actions/fetch-profile-action";
import { updateProfileAction } from "../../redux/actions/update-profile-action";
import { userLogoutAction } from "../../redux/actions/user-logout-action";
import { getProfile } from "../../redux/selectors/profile-entity-selector";
import { showErrorAction } from "../../redux/actions/app-view-action";

const mapStateToProps = (state) => {
  const profile = getProfile(state);
  return { profile };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchProfileAction,
      updateProfileAction,
      userLogoutAction,
      showErrorAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
