import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Profile from "./Profile";
import { getProfile } from "../../redux/selectors/profile-entity-selector";
import { fetchProfileAction } from "../../redux/actions/fetch-profile-action";
import { updateProfileAction } from "../../redux/actions/update-profile-action";
import { showErrorAction } from "../../redux/actions/app-view-action";
import { setTriviaAction } from "../../redux/actions/set-trivia-action"

const mapStateToProps = (state) => {
  const profile = getProfile(state);
  return { profile };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchProfileAction,
      updateProfileAction,
      showErrorAction,
      setTriviaAction
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
