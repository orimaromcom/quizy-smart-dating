import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Heart from "./Heart";
import { getQuote } from "../../redux/selectors/questions-entities-selectors";

import { fetchNewSuggestionsAction } from "../../redux/actions/fetch-suggestions-action";

const mapStateToProps = (state) => {
  const quote = getQuote(state);
  const MOCK_USER_ID = 1;
  return {
    MOCK_USER_ID,
    quote,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchNewSuggestionsAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Heart);
