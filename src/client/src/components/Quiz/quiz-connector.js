import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Quiz from "./Quiz";
import { getAllQuestions, getQuestionIndex, getQuote } from "../../redux/selectors/questions-entities-selectors";
import { getProfile } from "../../redux/selectors/profile-entity-selector";
import { getAllAnswers } from "../../redux/selectors/answers-entities-selector";
import { getSuggestions } from "../../redux/selectors/suggestions-entities-selector";
import { getIsAudio, getIsBroken } from "../../redux/selectors/app-view-selector";
import { toggleIsBrokenAction } from "../../redux/actions/toggle-isbroken-action"
import { incrementScoreAction } from "../../redux/actions/app-view-action";
import { fetchNewQuestionsAction } from "../../redux/actions/fetch-questions-action";
import { updateQuoteAction } from "../../redux/actions/update-quote-actions";
import { clearAnswersArrayAction } from "../../redux/actions/clear-answers-array";
import { clearQuestionsArrayAction } from "../../redux/actions/clear-questions-array";
import { clearQuestionsIndexAction } from "../../redux/actions/clear-questions-index";
import { incrementQuestionIndexAction } from "../../redux/actions/increment-questions-index-actions";
import { addAnswerAction } from "../../redux/actions/add-answer-action";
import { postDistancesAction } from "../../redux/actions/post-distances-action";
import { postAnswersAction } from "../../redux/actions/post-answers-action";
import { incrementAnswersIndexAction } from "../../redux/actions/increment-answers-index-action";
import { fetchNewSuggestionsAction } from "../../redux/actions/fetch-suggestions-action";
import { fetchAchievementsAction } from "../../redux/actions/fetch-achievements-action";

const mapStateToProps = (state) => {
  const questions = getAllQuestions(state);
  const questionIndex = getQuestionIndex(state);
  const answersArray = getAllAnswers(state);
  const suggestions = getSuggestions(state);
  const quote = getQuote(state);
  const isAudio = getIsAudio(state)
  const isBroken = getIsBroken(state)

  const userId = getProfile(state).id;
  return {
    questions,
    userId,
    answersArray,
    questionIndex,
    suggestions,
    isAudio,
    isBroken,
    quote,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchNewQuestionsAction,
      addAnswerAction,
      incrementQuestionIndexAction,
      incrementAnswersIndexAction,
      clearAnswersArrayAction,
      updateQuoteAction,
      fetchNewSuggestionsAction,
      clearQuestionsArrayAction,
      clearQuestionsIndexAction,
      postDistancesAction,
      toggleIsBrokenAction,
      incrementScoreAction,
      postAnswersAction,
      fetchAchievementsAction
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
