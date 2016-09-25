'use strict'

import React from 'react';
import { Navbar } from 'react-bootstrap'


export default class MenuComponent extends React.Component {

  constructor (props, context) {
    super(props, context);
    this.state = { structure: context.structure };
  }

  static contextTypes = { structure: React.PropTypes.object }

  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <span dangerouslySetInnerHTML={{__html:this.state.structure.app_name}}/>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    )
  }

}
