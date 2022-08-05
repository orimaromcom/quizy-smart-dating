import { connect } from "react-redux";
import { getIsLoading } from "../../redux/selectors/app-view-selector";
import Layout from "./Layout";

const mapStateToProps = (state) => {
  const isLoading = getIsLoading(state);
  return { isLoading };
};

export default connect(mapStateToProps)(Layout);
