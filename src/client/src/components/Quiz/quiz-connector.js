import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Quiz from "./Quiz";
import { getAllQuestions } from "../../redux/selectors/questions-entities-selectors";
import { removeQuestion } from "../../redux/actions/remove-question-action";

const mapStateToProps = (state) => {
  const questions = getAllQuestions(state);
 
  return { questions };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ removeQuestion }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
