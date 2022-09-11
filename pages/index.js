import FooterPage from './layout/footer'
import BgImage from './bgimage'
import Cards from './cards'
import Testimonials from './Testimonials';
import React, { Component, Fragment } from 'react'

export class index extends Component {
  render() {
    return (
      <React.Fragment>
        <BgImage />
        <Cards />
      </React.Fragment>
    )
  }
}

export default index