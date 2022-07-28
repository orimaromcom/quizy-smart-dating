import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Achievements from "./Achievements";
import { getUserAchievements } from "../../redux/selectors/questions-entities-selectors";
import { removeQuestion } from "../../redux/actions/remove-question-action";

const mapStateToProps = (state) => {
  const achievements = getAllQuestions(state);

  return { questions };
};

export default connect(mapStateToProps)(Achievements);
