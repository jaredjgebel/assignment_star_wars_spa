import React from 'react'

const LeftButton = ({ currentPage, currentPath }) => {
   const href = `${currentPath}/pages/${currentPage - 1}`

   const liClass = (currentPage === 1) ? "page-item disabled" : "page-item"

   return (
      <li className={liClass}>
         <a className="page-link" href={href}>
            Previous
         </a>
      </li>
   )
}

export default LeftButton