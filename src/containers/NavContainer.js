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
                     exact to="/people"
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
                     exact to="/films" activeClassName="active"
                     className="nav-link"
                  >
                     Films
                  </NavLink>
               </button>
            </div>
            <div className="nav-item">
               <button className="btn btn-dark col">
                  <NavLink
                     exact to="/starships" activeClassName="active"
                     className="nav-link"
                  >
                     Starships
                  </NavLink>
               </button>
            </div>
            <div className="nav-item">
               <button className="btn btn-dark col">
                  <NavLink
                     exact to="/vehicles" activeClassName="active"
                     className="nav-link"
                  >
                     Vehicles
                  </NavLink>
               </button>
            </div>
            <div className="nav-item">
               <button className="btn btn-dark col">
                  <NavLink
                     exact to="/species" activeClassName="active"
                     className="nav-link"
                  >
                     Species
                  </NavLink>
               </button>
            </div>
            <div className="nav-item">
               <button className="btn btn-dark col">
                  <NavLink
                     exact to="/planets" activeClassName="active"
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

