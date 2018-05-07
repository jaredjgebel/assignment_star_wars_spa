import React from 'react'

const MiddleButton = ({ pageNumber, active, currentPath }) => {
   const href = `${currentPath}/pages/${pageNumber}`
   const liClass = active ? 'page-item active' : 'page-item'

   return (
      <li className={liClass}>
         <a className="page-link" href={href}>{pageNumber}</a>
      </li>
   )
}

export default MiddleButton