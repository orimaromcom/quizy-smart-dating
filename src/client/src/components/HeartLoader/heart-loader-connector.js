import { connect } from "react-redux";
import { getLoadingMessage } from "../../redux/selectors/app-view-selector";
import HeartLoader from "./HeartLoader";
import { getQuote } from "../../redux/selectors/questions-entities-selectors";

const mapStateToProps = (state) => {
  const quote = getQuote(state);
  const loadingMessage = getLoadingMessage(state);
  return { loadingMessage, quote };
};

export default connect(mapStateToProps)(HeartLoader);
