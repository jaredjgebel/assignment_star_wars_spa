import React from 'react'
import propTypes from 'prop-types'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import NavContainer from '../containers/NavContainer';
import PagesContainer from '../containers/PagesContainer'
import Planets from './Planets'

const App = ({ entries, pages, singleEntry, ui }) => (
  <Router>
    <div className="app container-fluid">
      <div className="row">
        <div className="app-header bg-dark col-12">
          <h1 className="display-4">Star Wars Encyclopedia</h1>
        </div>
      </div>
      <NavContainer />

      <Route
        path="/"
        component={PagesContainer}
      />
      <Route
        path="/planets"
        component={Planets}
      />

    </div>
  </Router>
)

App.propTypes = {
  entries: propTypes.array,
  pages: propTypes.object,
  singleEntry: propTypes.bool,
  ui: propTypes.object,
}

export default App 
