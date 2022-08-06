import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SwitchButton from "./SwitchButton";
import { getIsAudio } from "../../../redux/selectors/app-view-selector";
import { toggleAudioAction } from "../../../redux/actions/toggle-audio-action";

const mapStateToProps = (state) => {
  const isAudio = getIsAudio(state);
  return { isAudio };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleAudioAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SwitchButton);
