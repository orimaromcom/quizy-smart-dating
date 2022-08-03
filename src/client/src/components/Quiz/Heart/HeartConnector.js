import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Heart from "./Heart";
import { getQuote } from "../../../redux/selectors/questions-entities-selectors";

import { fetchNewSuggestionsAction } from "../../../redux/actions/fetch-suggestions-action";
import { updatePageButtonAction } from "../../../redux/actions/update-page-button-action";
import { updateSuggestionDistanceAction } from "../../../redux/actions/update-suggestions-distance-value-action";
import { getSuggestionsDistance } from "../../../redux/selectors/suggestions-entities-selector";
import { getSuggestions } from "../../../redux/selectors/suggestions-entities-selector";

const mapStateToProps = (state) => {
  const quote = getQuote(state);
  const suggestionDistance = getSuggestionsDistance(state);
  const suggestions = getSuggestions(state);

  return {
    quote,
    suggestionDistance,
    suggestions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchNewSuggestionsAction,
      updatePageButtonAction,
      updateSuggestionDistanceAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Heart);
