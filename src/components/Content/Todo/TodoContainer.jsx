
import { connect } from "react-redux";
import Todo from './Todo';
import { addTodo, removeTodo, setCompletedAll } from "../../../redux/marketsReducer";
import { onChangeAC, onSubmitTodoAC } from "../../../redux/inputReducer";


let mapStateToProps = (state, ownProps) => ({
    marketName: ownProps.market,
    market: state.markets[ownProps.market],
    markets: state.markets,
    input: state.input
});

export default connect(mapStateToProps, 
    {  onChangeAC, removeTodo, onSubmitTodoAC, addTodo, setCompletedAll})(Todo);