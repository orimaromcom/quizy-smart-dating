import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Quiz from "./Quiz";
import {
  getAllQuestions,
  getQuestionIndex,
  getQuestionsLoading,
  getQuote,
} from "../../redux/selectors/questions-entities-selectors";
import { getUserId } from "../../redux/selectors/user-selector";
import { fetchNewQuestionsAction } from "../../redux/actions/fetch-questions-action";
import { updateQuoteAction } from "../../redux/actions/update-quote-actions";
import { clearAnswersArray } from "../../redux/actions/clear-answers-array";
import { incrementQuestionIndexAction } from "../../redux/actions/increment-questions-index-actions";
import { getAllAnswers } from "../../redux/selectors/answers-entities-selector";
import { addAnswer } from "../../redux/actions/add-answer-action";
import { incrementAnswersIndexAction } from "../../redux/actions/increment-answers-index-action";

const mapStateToProps = (state) => {
  const questions = getAllQuestions(state);
  const questionIndex = getQuestionIndex(state);
  const answersArray = getAllAnswers(state);

  const questionsLoading = getQuestionsLoading(state);
  const quote = getQuote(state)
  const userId = getUserId(state);
  return { questions, userId, answersArray, questionIndex, questionsLoading, quote };

};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchNewQuestionsAction,
      addAnswer,
      incrementQuestionIndexAction,
      incrementAnswersIndexAction,
      clearAnswersArray,
      updateQuoteAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
