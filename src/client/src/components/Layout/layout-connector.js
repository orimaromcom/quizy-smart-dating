import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Layout from "./Layout";
import { fetchNewQuestions } from "../../redux/quiz/actions/fetch-questions-action";

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchNewQuestions }, dispatch);
};

export default connect(null, mapDispatchToProps)(Layout);
