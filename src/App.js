import React from 'react';
import './style/style.css';
import { BrowserRouter, Route } from 'react-router-dom';
import ContentContainer from './components/Content/ContentContainer';

function App() {
  return (
    <BrowserRouter>
      <Route path="/:market?" component={ContentContainer} />
    </BrowserRouter>
  );
}

export default App;
