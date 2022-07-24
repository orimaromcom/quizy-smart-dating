import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Quiz from "./Quiz";
import { fetchNewQuestions } from "../../redux/actions/fetch-questions-action";
// import { getAllQuestions } from "../../redux/selectors/questions-entities-selectors";

const mapStateToProps = (state) => {
  const questions = fetchNewQuestions(state);
  return { questions };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ fetchNewQuestions }, dispatch);
// };

export default connect(mapStateToProps)(Quiz);
