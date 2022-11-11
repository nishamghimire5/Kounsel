import Testimonials from '../src/Testimonials';
import BgImage from './bgimage'
import Cards from './cards'
import React, { Component, Fragment } from 'react'

export class index extends Component {
  render() {
    return (
      <React.Fragment>
        <BgImage />
        <Cards />
        <Testimonials />
      </React.Fragment>
    )
  }
}

export default index