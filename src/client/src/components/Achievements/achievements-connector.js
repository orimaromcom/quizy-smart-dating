import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Achievements from "./Achievements";
import { fetcAchievements } from "../../redux/actions/fetch-achievements-action";
import { getAllAchievements } from "../../redux/selectors/achievements-entities-selector";

const mapStateToProps = (state) => {
  let achievements = getAllAchievements(state);
  return { achievements };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetcAchievements }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Achievements);
