import React, { useEffect, useMemo, useState } from 'react';

export default (props) => {
  const [toastShown, setToastShown] = useState(false);

  useEffect(() => {
    if (toastShown) {
      setTimeout(() => setToastShown(false), 5000);
    }
  }, [toastShown, setToastShown]);

  const sum = useMemo(() => {
    return props.market.reduce((sum, { value }) => sum + Number(value), 0)
  }, [props.market]);

  return (
    <>
      <div
        className={`toast d-flex align-items-center ${toastShown ? 'show' : ''}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        animation="true"
      >
        <div className="toast-body">
          Sum: {sum}
        </div>
        <span
          type="button"
          className="btn-close toast__close ms-auto me-2 px-3 py-1"
          data-bs-dismiss="toast"
          aria-label="Close"
          onClick={() => setToastShown(false)}
        >
          &times;
        </span>
      </div>

      <div className="dropdown-menu">
        <input type="submit" className="dropdown-item" value="Submit" />
        <div role="separator" className="dropdown-divider"></div>
        <button
          type="button"
          className="dropdown-item"
          onClick={() => setToastShown(true)}
          disabled={!props.market?.length}
        >
          Total sum
      </button>
        <button
          type="button"
          className="dropdown-item"
          onClick={() => props.setCompletedAll(props.marketName, props.market)}
        >
          Completed all
      </button>
        <div role="separator" className="dropdown-divider"></div>
        <button
          type="button"
          className="dropdown-item"
          onClick={() => {
            props.removeTodo(props.marketName);
          }}
        >
          Clear todos
      </button>
      </div>
    </>
  );
};
