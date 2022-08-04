import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Toaster from "./Toaster";
import {
  getIsError,
  getErrorMessage,
  getIsSuccess,
  getSuccessMessage,
} from "../../redux/selectors/app-view-selector";
import { hideToasterAction } from "../../redux/actions/app-view-action";

const mapStateToProps = (state) => {
  const isError = getIsError(state);
  const isSuccess = getIsSuccess(state);
  let message = "message";
  if (isError) {
    message = getErrorMessage(state);
  } else if (isSuccess) {
    message = getSuccessMessage(state);
  }
  console.log(isError, isSuccess);
  return { isError, message, isSuccess };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ hideToasterAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Toaster);
