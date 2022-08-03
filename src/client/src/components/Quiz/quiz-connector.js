import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Quiz from "./Quiz";
import {
  getAllQuestions,
  getQuestionIndex,
  getQuestionsLoading,
  getQuote,
} from "../../redux/selectors/questions-entities-selectors";
import { getProfile } from "../../redux/selectors/profile-entity-selector";
import { fetchNewQuestionsAction } from "../../redux/actions/fetch-questions-action";
import { updateQuoteAction } from "../../redux/actions/update-quote-actions";
import { clearAnswersArray } from "../../redux/actions/clear-answers-array";
import { clearQuestionsArrayAction } from "../../redux/actions/clear-questions-array";
import {clearQuestionsIndexAction} from "../../redux/actions/clear-questions-index";
import { incrementQuestionIndexAction } from "../../redux/actions/increment-questions-index-actions";
import { getAllAnswers } from "../../redux/selectors/answers-entities-selector";
import { addAnswerAction } from "../../redux/actions/add-answer-action";

import { incrementAnswersIndexAction } from "../../redux/actions/increment-answers-index-action";
import { fetchNewSuggestionsAction } from "../../redux/actions/fetch-suggestions-action";
import { getSuggestions } from "../../redux/selectors/suggestions-entities-selector";
import {getIsLoading} from "../../redux/selectors/app-view-selector"

const mapStateToProps = (state) => {
  const questions = getAllQuestions(state);
  const questionIndex = getQuestionIndex(state);
  const answersArray = getAllAnswers(state);
  const suggestions = getSuggestions(state);
  const isLoading = getIsLoading(state)
  const quote = getQuote(state);

  const userId = getProfile(state).id;
  return {
    questions,
    userId,
    answersArray,
    questionIndex,
    quote,
    suggestions,
    isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchNewQuestionsAction,
      addAnswerAction,
      incrementQuestionIndexAction,
      incrementAnswersIndexAction,
      clearAnswersArray,
      updateQuoteAction,
      fetchNewSuggestionsAction,
      clearQuestionsArrayAction,
      clearQuestionsIndexAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
