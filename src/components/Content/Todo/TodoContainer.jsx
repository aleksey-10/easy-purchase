import { connect } from "react-redux";
import Todo from './Todo';
import { addItemAC, saveToLSAC, setTodosAC, clearTodoListAC } from "../../../redux/marketsReducer";
import { onChangeAC, onSubmitTodoAC } from "../../../redux/inputReducer";

let mapStateToProps = (state, ownProps) => ({
    marketName: ownProps.market,
    market: state.markets[ownProps.market],
    input: state.input
});
export default connect(mapStateToProps, 
    { addItemAC, saveToLSAC, onChangeAC, clearTodoListAC, onSubmitTodoAC })(Todo);