import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AppBarComponent from "./AppBarComponent";
import { userLogoutAction } from "../../redux/actions/user-logout-action";
import { getIsAudio } from "../../redux/selectors/app-view-selector";

import { getProfile } from "../../redux/selectors/profile-entity-selector";

const mapStateToProps = (state) => {
  const profile = getProfile(state);
  const isAudio = getIsAudio(state);
  return { profile,isAudio };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ userLogoutAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBarComponent);
