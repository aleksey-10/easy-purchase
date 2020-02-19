import { connect } from "react-redux";
import TodoItem from './TodoItem';
import { removeTodoAC, saveToLSAC, setTodoIdAC, setTodoCompletedAC } from "../../../../../redux/marketsReducer";

let mapStateToProps = (state, ownProps) => ({
    market: state.markets[ownProps.marketName],
    marketName: ownProps.marketName,
    todo: ownProps.todo
})

export default connect(mapStateToProps, 
    {removeTodoAC, saveToLSAC, setTodoIdAC, setTodoCompletedAC})(TodoItem);