import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Navbar from "./Navbar";
import { getPageButtonValue } from "../../redux/selectors/app-view-selector";
import { updatePageButtonAction } from "../../redux/actions/update-page-button-action";

const mapStateToProps = (state) => {
  const pageButtonValue = getPageButtonValue(state);

  return { pageButtonValue };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updatePageButtonAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
