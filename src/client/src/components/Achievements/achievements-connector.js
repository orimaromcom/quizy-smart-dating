import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Achievements from "./Achievements";
import { fetcAchievements } from "../../redux/actions/fetch-achievements-action";
import { getAllAchievements } from "../../redux/selectors/achievements-entities-selector";
import { getUserId, getUserEmail } from "../../redux/selectors/user-selector";
const mapStateToProps = (state) => {
  const userId = getUserId(state);
  const userEmail = getUserEmail(state);
  let achievements = getAllAchievements(state);
  return { achievements, userId, userEmail };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetcAchievements }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Achievements);
