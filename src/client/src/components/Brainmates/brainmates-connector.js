import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Brainmates from "./Brainmates";
import { fetcBrainmates } from "../../redux/actions/fetch-brainmates-action";
import { getAllBrainmates } from "../../redux/selectors/brainmates-entities-selector";

const mapStateToProps = (state) => {
  let brainmates = getAllBrainmates(state);
  return { brainmates };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetcBrainmates }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Brainmates);
