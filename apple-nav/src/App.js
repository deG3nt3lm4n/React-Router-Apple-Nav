import React from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css';

import Nav from './components/NavWrapper'
import SubNav from './components/SubNav'

import Data from './data'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav data={Data} />

        <Route to="/sub/:id" >
          <SubNav data={Data} />
        </Route>
      </header>






    </div>
  );
}

export default App;
