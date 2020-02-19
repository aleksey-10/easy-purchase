import { connect } from "react-redux";
import Todo from './Todo';
import { addItemAC } from "../../../redux/marketsReducer";

let mapStateToProps = (state, ownProps) => ({
    market: state.markets[ownProps.market]
});

export default connect(mapStateToProps, {addItemAC})(Todo);