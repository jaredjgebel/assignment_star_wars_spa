import React from 'react'
import { Link } from 'react-router-dom'

const RightButton = ({ currentPage, lastPage, resourceType }) => {
   const href = `/${resourceType}/pages/${currentPage + 1}`
   const liClass = (currentPage === lastPage) ? "page-item disabled" : "page-item"

   return (
      <li className={liClass}>
         <Link to={`${href}`} className="page-link" >
            Next
         </Link>
      </li>
   )
}

export default RightButton