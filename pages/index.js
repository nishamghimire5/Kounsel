import TitleBar from './layout/titlebar'
import FooterPage from './layout/footer'
import Image from 'next/image'
import Cards from './cards'

import React, {Component, Fragment} from 'react'
import BGImage from './bgimage'

export class index extends Component {
  render() {
    return (
      <React.Fragment>
        <BGImage/>
      </React.Fragment>
    )
  }
}

export default index