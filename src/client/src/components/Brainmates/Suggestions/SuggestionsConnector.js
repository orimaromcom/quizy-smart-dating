import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Suggestions from "./Suggestions"
import { getSuggestions } from "../../../redux/selectors/suggestions-entities-selector"
import {clearSuggestionsAction} from "../../../redux/actions/clear-suggestions-action"
import {updateSuggestionsOrBrainmatesAction} from "../../../redux/actions/update-suggestions-distance-value-action"
import {getSuggestionsDistance} from "../../../redux/selectors/suggestions-entities-selector"
import { fetchNewSuggestionsAction } from "../../../redux/actions/fetch-suggestions-action";
import {getIsLoading} from "../../../redux/selectors/app-view-selector"
import { getProfile } from "../../../redux/selectors/profile-entity-selector";
import {postUserLikeAction} from "../../../redux/actions/post-user-like-action"
import { fetchBrainmatesAction } from "../../../redux/actions/fetch-brainmates-action";



const mapStateToProps = (state) => {

    const suggestions = getSuggestions(state)
    const suggestionsOrBrainmates = getSuggestionsDistance(state)
    const isLoading = getIsLoading(state)
    const userId = getProfile(state).id;
    return { suggestions , suggestionsOrBrainmates, isLoading,userId};
  };

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ updateSuggestionsOrBrainmatesAction,clearSuggestionsAction ,fetchNewSuggestionsAction,postUserLikeAction,fetchBrainmatesAction}, dispatch);
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Suggestions);
