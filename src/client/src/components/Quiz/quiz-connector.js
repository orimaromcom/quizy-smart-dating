import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Quiz from "./Quiz";
import {
  getAllQuestions,
  getQuestionIndex,
  getQuestionsLoading,
  getQuote,
} from "../../redux/selectors/questions-entities-selectors";
import { fetchNewQuestions } from "../../redux/actions/fetch-questions-action";
import { updateQuote } from "../../redux/actions/update-quote-actions";
import { clearAnswersArray } from "../../redux/actions/clear-answers-array";
import { incrementQuestionIndex } from "../../redux/actions/increment-questions-index-actions";
import { getAllAnswers } from "../../redux/selectors/answers-entities-selector";
import { addAnswer } from "../../redux/actions/add-answer-action";
import { incrementAnswersIndex } from "../../redux/actions/increment-answers-index-action";
import {fetchNewSuggestionsAction} from "../../redux/actions/fetch-suggestions-action"
import {getSuggestions} from "../../redux/selectors/suggestions-entities-selector"

const mapStateToProps = (state) => {
  const questions = getAllQuestions(state);
  const questionIndex = getQuestionIndex(state);
  const answersArray = getAllAnswers(state);
  const suggestions = getSuggestions(state)

  const questionsLoading = getQuestionsLoading(state);
  const quote = getQuote(state)
  const MOCK_USER_ID = 1;
  return { questions, MOCK_USER_ID, answersArray, questionIndex, questionsLoading, quote, suggestions };

};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchNewQuestions,
      addAnswer,
      incrementQuestionIndex,
      incrementAnswersIndex,
      clearAnswersArray,
      updateQuote,
      fetchNewSuggestionsAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
