import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Login from "./Login";
import { getProfile } from "../../redux/selectors/profile-entity-selector";

import { fetchProfileAction } from "../../redux/actions/fetch-profile-action";
import { updateProfileAction } from "../../redux/actions/update-profile-action";

const mapStateToProps = (state) => {
   let profile = getProfile(state);
   return { profile };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchProfileAction,
      updateProfileAction
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
