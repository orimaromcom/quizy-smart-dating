import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Achievements from "./Achievements";
import { getProfile } from "../../redux/selectors/profile-entity-selector";
import { fetchAchievementsAction } from "../../redux/actions/fetch-achievements-action";
import { getAllAchievements } from "../../redux/selectors/achievements-entities-selector";
const mapStateToProps = (state) => {
  const achievements = getAllAchievements(state);
  const userId = getProfile(state).id;
  return { achievements, userId };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchAchievementsAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Achievements);
