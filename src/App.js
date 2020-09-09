import React from 'react';
import './style/style.scss';
import { Route, HashRouter } from 'react-router-dom';
import ContentContainer from './components/Content/ContentContainer';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path="/:market?" component={ContentContainer} />
      </HashRouter>
    </div>
  );
}

export default App;
