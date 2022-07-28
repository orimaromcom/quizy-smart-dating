import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Achievements from "./Achievements";
import { fetcAchievements } from "../../redux/achievements/actions/fetch-achievements-action";
import { getAllAchievements } from "../../redux/achievements/selectors/achievements-selector";

const mapStateToProps = (state) => {
  const achievements = getAllAchievements(state);
  if (!achievements) {
    fetcAchievements();
  }
  return { achievements };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetcAchievements }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Achievements);
