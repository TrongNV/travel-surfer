import React from 'react';

export default (Context, ContextTypes) => {

  return (Component) => {

    return class ContextProvider extends Component {

      static childContextTypes = ContextTypes;

      getChildContext () { return Context; }

      render () { return <Component {...this.props} /> }

    }

  }

}
