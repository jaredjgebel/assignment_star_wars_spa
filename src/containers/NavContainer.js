import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavContainer.css'

export default function NavContainer() {
   return (
      <div>
         <nav className="navbar navbar-dark row">
            <div className="nav-item">
               <button className="btn btn-dark col">
                  <NavLink
                     exact to="/people/pages/1"
                     activeClassName="active"
                     className="nav-link"
                  >
                     People
                  </NavLink>
               </button>
            </div>
            <div className="nav-item">
               <button className="btn btn-dark col">
                  <NavLink
                     exact to="/films/pages/1" activeClassName="active"
                     className="nav-link"
                  >
                     Films
                  </NavLink>
               </button>
            </div>
            <div className="nav-item">
               <button className="btn btn-dark col">
                  <NavLink
                     exact to="/starships/pages/1" activeClassName="active"
                     className="nav-link"
                  >
                     Starships
                  </NavLink>
               </button>
            </div>
            <div className="nav-item">
               <button className="btn btn-dark col">
                  <NavLink
                     exact to="/vehicles/pages/1" activeClassName="active"
                     className="nav-link"
                  >
                     Vehicles
                  </NavLink>
               </button>
            </div>
            <div className="nav-item">
               <button className="btn btn-dark col">
                  <NavLink
                     exact to="/species/pages/1" activeClassName="active"
                     className="nav-link"
                  >
                     Species
                  </NavLink>
               </button>
            </div>
            <div className="nav-item">
               <button className="btn btn-dark col">
                  <NavLink
                     exact to="/planets/pages/1" activeClassName="active"
                     className="nav-link"
                  >
                     Planets
                  </NavLink>
               </button>
            </div>
         </nav>
      </div>
   )
}

