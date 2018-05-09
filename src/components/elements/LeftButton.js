import React from 'react'
import { Link } from 'react-router-dom'

const LeftButton = ({ currentPage, resourceType }) => {
   const href = `/${resourceType}/pages/${currentPage - 1}`

   const liClass = (currentPage === 1) ? "page-item disabled" : "page-item"

   return (
      <li className={liClass}>
         <Link to={`${href}`} className="page-link" >
            Previous
         </Link>
      </li>
   )
}

export default LeftButton