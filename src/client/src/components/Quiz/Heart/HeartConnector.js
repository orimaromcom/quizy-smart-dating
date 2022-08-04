import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Heart from "./Heart";
import { clearQuestionsArrayAction } from "../../../redux/actions/clear-questions-array";
import { clearQuestionsIndexAction } from "../../../redux/actions/clear-questions-index";
import { updateQuoteAction } from "../../../redux/actions/update-quote-actions";
import { fetchNewSuggestionsAction } from "../../../redux/actions/fetch-suggestions-action";
import { updatePageButtonAction } from "../../../redux/actions/update-page-button-action";
import { updateSuggestionDistanceAction } from "../../../redux/actions/update-suggestions-distance-value-action";

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchNewSuggestionsAction,
      updatePageButtonAction,
      updateSuggestionDistanceAction,
      clearQuestionsArrayAction,
      clearQuestionsIndexAction,
      updateQuoteAction,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Heart);
