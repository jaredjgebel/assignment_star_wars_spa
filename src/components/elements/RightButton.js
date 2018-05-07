import React from 'react'

const RightButton = ({ currentPage, lastPage, currentPath }) => {
   const href = `${currentPath}/pages/${currentPage + 1}`
   const liClass = (currentPage === lastPage) ? "page-item disabled" : "page-item"

   return (
      <li className={liClass}>
         <a className="page-link" href={href}>
            Next
         </a>
      </li>
   )
}

export default RightButton