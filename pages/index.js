import Testimonials from '../src/Testimonials';
import TitleBar from './layout/titlebar'
import FooterPage from './layout/footer'
import BgImage from './bgimage'
import Cards from './cards'
// import counselorMessage from './counselorMessage';

import React, { Component, Fragment } from 'react'

export class index extends Component {
  render() {
    return (
      <React.Fragment>
        <BgImage />
        <Cards />
        <h3 className='testimonial-title'>Testimonials</h3>
        <Testimonials />
        <FooterPage />
      </React.Fragment>
    )
  }
}

export default index