import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Profile from "./Profile";
import { fetchProfileAction } from "../../redux/actions/fetch-profile-action";
import { updateProfileAction } from "../../redux/actions/update-profile-action";
import { resetProfileAction } from "../../redux/actions/reset-profile-action";
import { getProfile } from "../../redux/selectors/profile-entity-selector";

const mapStateToProps = (state) => {
  const profile = getProfile(state);
  return { profile };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { fetchProfileAction, updateProfileAction, resetProfileAction },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
