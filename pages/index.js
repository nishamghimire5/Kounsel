import FooterPage from './layout/footer'
import BgImage from './bgimage'
import Cards from './cards'
import Testimonials from './testimonials'

import React, { Component, Fragment } from 'react'

export class index extends Component {
  render() {
    return (
      <React.Fragment>
        <BgImage />
        <Cards />
        <div style={{ position: 'relative', top: '75rem' }}>
          <h3 style={{ position: 'absolute', left: '15.5%', top: '-5rem' }} className='title'>Testimonials</h3>
          <Testimonials />
        </div>
        <div style={{ position: 'relative', top: '90rem' }}>
          <FooterPage />
        </div>
      </React.Fragment>
    )
  }
}

export default index