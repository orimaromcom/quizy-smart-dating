import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Brainmates from "./Brainmates";
import { getProfile } from "../../redux/selectors/profile-entity-selector";
import { fetchBrainmatesAction } from "../../redux/actions/fetch-brainmates-action";
import { getAllBrainmates } from "../../redux/selectors/brainmates-entities-selector";

const mapStateToProps = (state) => {
  let brainmates = getAllBrainmates(state);
  const userId = getProfile(state).id;
  return { brainmates, userId };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchBrainmatesAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Brainmates);
