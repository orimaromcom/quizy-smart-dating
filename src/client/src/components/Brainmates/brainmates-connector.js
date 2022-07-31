import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Brainmates from "./Brainmates";
import { getUserId } from "../../redux/selectors/user-selector";
import { fetcBrainmates } from "../../redux/actions/fetch-brainmates-action";
import { getAllBrainmates } from "../../redux/selectors/brainmates-entities-selector";

const mapStateToProps = (state) => {
  let brainmates = getAllBrainmates(state);
  const userId = getUserId(state);
  return { brainmates, userId };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetcBrainmates }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Brainmates);
