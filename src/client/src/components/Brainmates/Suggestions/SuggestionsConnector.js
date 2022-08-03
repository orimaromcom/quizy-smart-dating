import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Suggestions from "./Suggestions"
import { getSuggestions } from "../../../redux/selectors/suggestions-entities-selector"
import {clearSuggestionsAction} from "../../../redux/actions/clear-suggestions-action"
import {updateSuggestionDistanceAction} from "../../../redux/actions/update-suggestions-distance-value-action"
import {getSuggestionsDistance} from "../../../redux/selectors/suggestions-entities-selector"
import { fetchNewSuggestionsAction } from "../../../redux/actions/fetch-suggestions-action";
import {getIsLoading} from "../../../redux/selectors/app-view-selector"
import { getProfile } from "../../../redux/selectors/profile-entity-selector";
import {postUserLikeAction} from "../../../redux/actions/post-user-like-action"



const mapStateToProps = (state) => {

    const suggestions = getSuggestions(state)
    const suggestionDistance = getSuggestionsDistance(state)
    const isLoading = getIsLoading(state)
    const userId = getProfile(state).id;
    return { suggestions , suggestionDistance, isLoading,userId};
  };
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ updateSuggestionDistanceAction,clearSuggestionsAction ,fetchNewSuggestionsAction,postUserLikeAction}, dispatch);
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Suggestions);