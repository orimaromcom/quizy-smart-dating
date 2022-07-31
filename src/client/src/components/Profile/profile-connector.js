import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Profile from "./Profile";
import { fetcProfile } from "../../redux/actions/fetch-profile-action";
import { updateProfile } from "../../redux/actions/update-profile-action";
import { getProfile } from "../../redux/selectors/profile-entity-selector";

const mapStateToProps = (state) => {
  let profile = getProfile(state);
  return { profile };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetcProfile, updateProfile }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
