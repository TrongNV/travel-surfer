'use strict';

import React from 'react';

export default (Context, ContextTypes) => {

  return (Component) => {

    return class ComponentProvider extends React.Component {

      static childContextTypes = ContextTypes;

      getChildContext () { return Context; }

      render () { return <Component {...this.props} /> }

    }

  }

}
