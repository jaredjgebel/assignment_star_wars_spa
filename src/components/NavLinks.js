import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavContainer() {
   return (
      <div>
         <NavLink exact to="/people" activeClassName="active">
            People
         </NavLink>
         <NavLink exact to="/films" activeClassName="active">
            Films
         </NavLink>
         <NavLink exact to="/starships" activeClassName="active">
            Starships
         </NavLink>
         <NavLink exact to="/vehicles" activeClassName="active">
            Vehicles
         </NavLink>
         <NavLink exact to="/species" activeClassName="active">
            Species
         </NavLink>
         <NavLink exact to="/planets" activeClassName="active">
            Planets
         </NavLink>
      </div>
   )
}

