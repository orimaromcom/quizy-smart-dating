import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Quiz from "./Quiz";
import { getAllQuestions } from "../../redux/selectors/questions-entities-selectors";
import { fetchNewQuestions } from "../../redux/actions/fetch-questions-action";

const mapStateToProps = (state) => {
  const questions = getAllQuestions(state);
  const MOCK_USER_ID = 1;
  return { questions, MOCK_USER_ID };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchNewQuestions }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
