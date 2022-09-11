import FooterPage from './layout/footer'
import BgImage from './bgimage'
import Cards from './cards'
import React, { Component, Fragment } from 'react'

export class index extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{marginLeft : 10+'em'}}>
        <BgImage />
        <div className='Container'>
        <Cards />
        </div>
        </div>
        <FooterPage />
      </React.Fragment>
    )
  }
}

export default index