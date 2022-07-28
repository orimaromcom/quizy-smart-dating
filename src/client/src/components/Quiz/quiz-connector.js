import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Quiz from "./Quiz";
import { getAllQuestions, getQuestionIndex } from "../../redux/selectors/questions-entities-selectors";
import { fetchNewQuestions } from "../../redux/actions/fetch-questions-action";
import {incrementQuestionIndex} from "../../redux/actions/increment-questions-index-actions"
import { getAllAnswers } from "../../redux/selectors/answers-entities-selector"
import { addAnswer } from "../../redux/actions/answers-actions";

const mapStateToProps = (state) => {
  const questions = getAllQuestions(state);
  const questionIndex = getQuestionIndex(state)
  const answersArray = getAllAnswers(state)
  const MOCK_USER_ID = 1;
  return { questions, MOCK_USER_ID ,answersArray, questionIndex};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchNewQuestions, addAnswer, incrementQuestionIndex }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
