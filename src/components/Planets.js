import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './Planets.css'

const Planets = ({ entries }) => {
   if (!entries[0]) {
      return (
         <div>
            <p>Loading entries.</p>
         </div>
      )
   }

   const planets = entries.map((planet, index) => {
      return (

         <div className="planet card" key={planet.name}>
            <div className="card-header bg-dark">
               <h2 className="card-title">{`${entries[index].name}`}</h2>
            </div>
            <ul className="list-unstyled card-body">
               <li>Population: {`${entries[index].population}`}</li>
               <li>Rotation Period: {`${entries[index].rotation_period}`}</li>
               {/* <li>Orbital Period: {`${entries[index].orbital_period}`}</li> */}
               <li>Climate: {`${entries[index].climate}`}</li>
               {/* <li>Terrain: {`${entries[index].terrain}`}</li> */}
               <li>Diameter: {`${entries[index].diameter}`}</li>
               <li>Gravity: {`${entries[index].gravity}`}</li>
               {/* <li>Surface Water: {`${entries[index].terrain}`}</li> */}

            </ul>

         </div>
      )
   })
   return (
      <div className="all-entries container">
         <h1>Planets</h1>
         <div className="flex-wrapper">
            {planets}
         </div>
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      entries: state.entries,
   }
}

export default withRouter(connect(
   mapStateToProps
)(Planets)) 