import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HeartParticle from "./HeartParticles";
import { getIsBroken} from "../../../redux/selectors/app-view-selector"
import { toggleIsBrokenAction } from "../../../redux/actions/toggle-isbroken-action"

const mapStateToProps = (state) => {
  const isBroken = getIsBroken(state);

  return {
    isBroken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      toggleIsBrokenAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HeartParticle);
