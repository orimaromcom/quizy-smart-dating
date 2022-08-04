import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Brainmates from "./Brainmates";
import { getProfile } from "../../redux/selectors/profile-entity-selector";
import { fetchBrainmatesAction } from "../../redux/actions/fetch-brainmates-action";
import { getAllBrainmates } from "../../redux/selectors/brainmates-entities-selector";
import { getSuggestions } from "../../redux/selectors/suggestions-entities-selector"
import {getSuggestionsDistance} from "../../redux/selectors/suggestions-entities-selector"
import {getIsLoading} from "../../redux/selectors/app-view-selector"

const mapStateToProps = (state) => {
  let brainmates = getAllBrainmates(state);
  const userId = getProfile(state).id;
  const suggestions = getSuggestions(state)
  const suggestionsOrBrainmates = getSuggestionsDistance(state)
  const isLoading = getIsLoading(state)
  return { brainmates, userId, suggestions,suggestionsOrBrainmates,isLoading};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchBrainmatesAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Brainmates);
