import { connect } from "react-redux";
import {
  getIsLoading,
  getLoadingMessage,
} from "../../redux/selectors/app-view-selector";
import HeartLoader from "./HeartLoader";

const mapStateToProps = (state) => {
  const isLoading = getIsLoading(state);
  const loadingMessage = getLoadingMessage(state);
  return { isLoading, loadingMessage };
};

export default connect(mapStateToProps)(HeartLoader);
