import React, { Component } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import App from '../components/App'
import { getInitialData } from './../helpers/actions'

class AppContainer extends Component {
   componentDidMount() {
      this.props.getInitialData()
   }

   render() {
      console.log(this.props)
      const { entriesType, entries, pages, singleEntry, ui } = this.props

      return <App
         entries={entries}
         entriesType={entriesType}
         pages={pages}
         singleEntry={singleEntry}
         ui={ui}
      />
   }
}

AppContainer.propTypes = {
   entriesType: propTypes.string,
   entries: propTypes.array,
   pages: propTypes.object,
   singleEntry: propTypes.bool,
   ui: propTypes.object,
}

const mapStateToProps = (state) => {
   return {
      entriesType: state.entriesType,
      entries: state.entries,
      pages: state.pages,
      singleEntry: state.singleEntry,
      ui: state.ui,
      error: state.error,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      getInitialData: () => {
         dispatch(getInitialData())
      }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(AppContainer)