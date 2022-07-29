import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Achievements from "./Achievements";
import { fetcAchievements } from "../../redux/actions/fetch-achievements-action";
import { getAchievements } from "../../redux/selectors/achievements-selector";

const mapStateToProps = (state) => {
  let achievements = getAchievements(state);
  return { achievements };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetcAchievements }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Achievements);
