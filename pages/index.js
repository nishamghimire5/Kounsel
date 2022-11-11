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
        <div style={{position: 'relative', top: '85rem'}}>
          <h2 className='testimonial-title'>Testimonials</h2>
          <Testimonials />
        </div>
      </React.Fragment>
    )
  }
}

export default index