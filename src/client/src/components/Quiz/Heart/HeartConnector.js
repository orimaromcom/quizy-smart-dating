import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Heart from "./Heart";
import { getQuote } from "../../../redux/selectors/questions-entities-selectors";
import { clearQuestionsArrayAction } from "../../../redux/actions/clear-questions-array";
import {clearQuestionsIndexAction} from "../../../redux/actions/clear-questions-index";
import { updateQuoteAction } from "../../../redux/actions/update-quote-actions";

import { fetchNewSuggestionsAction } from "../../../redux/actions/fetch-suggestions-action";
import { updatePageButtonAction } from "../../../redux/actions/update-page-button-action";
import { updateSuggestionsOrBrainmatesAction } from "../../../redux/actions/update-suggestions-distance-value-action";
import { getSuggestionsDistance } from "../../../redux/selectors/suggestions-entities-selector";
import { getSuggestions } from "../../../redux/selectors/suggestions-entities-selector";

const mapStateToProps = (state) => {
  const quote = getQuote(state);
  const suggestionsOrBrainmates = getSuggestionsDistance(state);
  const suggestions = getSuggestions(state);

  return {
    quote,
    suggestionsOrBrainmates,
    suggestions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchNewSuggestionsAction,
      updatePageButtonAction,
      updateSuggestionsOrBrainmatesAction,
      clearQuestionsArrayAction,
      clearQuestionsIndexAction,
      updateQuoteAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Heart);
