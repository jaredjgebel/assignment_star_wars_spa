import React from 'react'
import Component from 'prop-types'
import './App.css'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavContainer from './NavLinks';

const App = ({ entries, entriesType, pages, singleEntry, ui }) => (
  <Router>
    <div>
      <NavContainer />
      {console.log(ui.isFetching)}
      {/* <Route exact path="/" component={People} /> */}
    </div>
  </Router>
)

export default App 
