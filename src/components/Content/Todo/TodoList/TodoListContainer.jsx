import React from 'react';
import { connect } from "react-redux";
import TodoList from './TodoList';
import Preloader from './../../../common/Preloader';

class TodoListContainer extends React.Component {
  render() {
    if (this.props.markets.fetching) {
      return <Preloader />;
    }

    return (
      <>
      {!this.props.market.length
        ? <h1 className="display-4">No todos</h1>
        : <TodoList market={this.props.market} marketName={this.props.marketName} />}
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  markets: state.markets,
  market: state.markets[ownProps.marketName],
  marketName: ownProps.marketName
})

export default connect(mapStateToProps)(TodoListContainer);