import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Quiz from "./Quiz";
import { getAllQuestions } from "../../redux/selectors/questions-entities-selectors";
import { getAllAnswers } from "../../redux/selectors/answers-entities-selector"
import { fetchNewQuestions } from "../../redux/actions/fetch-questions-action";
import { addAnswer } from "../../redux/actions/answers-actions";

const mapStateToProps = (state) => {
  const questions = getAllQuestions(state);
  const answers = getAllAnswers(state)
  const MOCK_USER_ID = 1;
  return { questions, MOCK_USER_ID ,answers};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchNewQuestions, addAnswer }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
