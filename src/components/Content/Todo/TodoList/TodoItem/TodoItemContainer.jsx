import { connect } from "react-redux";
import TodoItem from './TodoItem';
import { removeTodo, setCompleted } from "../../../../../redux/marketsReducer";


let mapStateToProps = (state, ownProps) => ({
    markets: state.markets,
    market: state.markets[ownProps.marketName],
    marketName: ownProps.marketName,
    todo: ownProps.todo
})

export default connect(mapStateToProps,
    { removeTodo, setCompleted })(TodoItem);