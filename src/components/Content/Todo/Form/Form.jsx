import React, { useCallback } from 'react';
import AdditionalActions from './AdditionalActions/AdditionalActions';

export default ({
    addTodo,
    input,
    onSubmitTodoAC,
    marketName,
    onChangeAC,
    removeTodo,
    saveToLSAC,
    market,
    calcSum,
    setCompletedAll,
  }) => {
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    addTodo(marketName, input.form.title, input.form.value);
    onSubmitTodoAC();
  }, [addTodo, onSubmitTodoAC, input, marketName]);

  return (
    <form className="form row justify-content-around" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control col"
        placeholder="Product"
        value={input.form.title}
        onChange={event => onChangeAC('title', event.target.value)}
        required
      />

      <input
        type="number"
        className="form-control col-2"
        placeholder="Value"
        min="0"
        value={input.form.value || ''}
        onChange={event => onChangeAC('value', event.target.value)}
      />

      <button
        type="button"
        className="form-control col-2 col-md-1 btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="sr-only">Toggle Dropdown</span>
      </button>

      <AdditionalActions
        removeTodo={removeTodo}
        saveToLSAC={saveToLSAC}
        marketName={marketName}
        market={market}
        calcSum={calcSum}
        setCompletedAll={setCompletedAll}
      />
    </form>

  )
}
