import React from 'react'
import { Link } from 'react-router-dom'

const MiddleButton = ({ pageNumber, active, resourceType }) => {
   // console.log('resource ', resourceType)
   // console.log('page number ', pageNumber)
   const href = `/${resourceType}/pages/${pageNumber}`
   const liClass = active ? 'page-item active' : 'page-item'

   return (
      <li className={liClass}>
         <Link to={`${href}`} className="page-link">
            {pageNumber}
         </Link>
      </li >
   )
}

export default MiddleButton