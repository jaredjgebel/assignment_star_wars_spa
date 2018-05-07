import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import LeftButton from '../components/elements/LeftButton'
import MiddleButton from '../components/elements/MiddleButton'
import RightButton from '../components/elements/RightButton'

const PagesContainer = ({ pages, ...routeProps }) => {
   // currentPage, photoQuant, numPerPage
   const currentPath = routeProps.location.pathname
   console.log(routeProps)
   const currentPage = 1
   const numPerPage = 10
   const numMiddleButtons = Math.ceil(pages.count / numPerPage)
   const middleButtons = []
   for (let i = 0; i <= numMiddleButtons - 1; i++) {
      let active = (i + 1) === currentPage ? true : false

      middleButtons.push(
         <MiddleButton
            pageNumber={(i + 1)}
            active={active}
            key={i}
            currentPath={currentPath}
         />
      )
   }

   return (
      <ul className="pagination">
         <LeftButton currentPage={currentPage} currentPath={currentPath} />
         {middleButtons}
         <RightButton currentPage={currentPage} lastPage={numMiddleButtons} currentPath={currentPath} />
      </ul>
   )
}

const mapStateToProps = (state) => {
   return {
      pages: state.pages,
   }
}

export default withRouter(connect(
   mapStateToProps
)(PagesContainer))