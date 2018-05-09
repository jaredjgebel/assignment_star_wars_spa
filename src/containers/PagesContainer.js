import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './PagesContainer.css'
import LeftButton from '../components/elements/LeftButton'
import MiddleButton from '../components/elements/MiddleButton'
import RightButton from '../components/elements/RightButton'

const PagesContainer = ({ pages, match, ...routeProps }) => {

   const currentPath = routeProps.location.pathname
   const pageRegex = new RegExp(/\d+$/)
   const currentPage = (currentPath !== '/') ? Number(pageRegex.exec(currentPath)[0]) : ''
   const resourceRegex = new RegExp(/\w+(?=\/pages)/i)
   const resourceType = (currentPath !== '/') ? resourceRegex.exec(currentPath)[0] : ''

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
            resourceType={resourceType}
         />
      )
   }

   return (
      <ul className="pagination justify-content-center">
         <LeftButton currentPage={currentPage} resourceType={resourceType} />
         {middleButtons}
         <RightButton currentPage={currentPage} lastPage={numMiddleButtons} resourceType={resourceType} />
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