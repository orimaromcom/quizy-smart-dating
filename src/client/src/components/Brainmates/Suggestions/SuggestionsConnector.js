import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Suggestions from "./Suggestions"
import { getSuggestions } from "../../../redux/selectors/suggestions-entities-selector"
import {clearSuggestionsAction} from "../../../redux/actions/clear-suggestions-action"
import {updateSuggestionDistanceAction} from "../../../redux/actions/update-suggestions-distance-value-action"
import {getSuggestionsDistance} from "../../../redux/selectors/suggestions-entities-selector"


const mapStateToProps = (state) => {

    const suggestions = getSuggestions(state)
    const suggestionDistance = getSuggestionsDistance(state)
    return { suggestions , suggestionDistance};
  };
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ updateSuggestionDistanceAction }, dispatch);
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Suggestions);