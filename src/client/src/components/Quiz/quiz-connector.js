import { connect } from "react-redux";
import Quiz from "./Quiz";
import { getAllQuestions } from "../../redux/selectors/questions-entities-selectors";

const mapStateToProps = (state) => {
  const questions = getAllQuestions(state);
  return { questions };
};

export default connect(mapStateToProps)(Quiz);
