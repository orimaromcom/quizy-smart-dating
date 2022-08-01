import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Navbar from "./Navbar";

const mapStateToProps = (state) => {
 
  return {  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
