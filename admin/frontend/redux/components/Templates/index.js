'use strict';

import React            from 'react';
import { Grid }         from 'react-bootstrap';
import LightTheme       from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme      from 'material-ui/styles/getMuiTheme';
import Menu             from './Menu';
import Structure        from '../../../settings';
import Theme            from '../../../settings/Theme';
import Styles           from '../../../settings/Styles';
import Helper           from '../../../utils/Helper';
import ContextProvider  from '../../../utils/ContextProvider';

let Context = {
      muiTheme: getMuiTheme(LightTheme, Theme),
      structure: Structure,
      helper: Helper,
      styles: Styles
    }
  , ContextType = {
      muiTheme: React.PropTypes.object,
      structure: React.PropTypes.object,
      helper: React.PropTypes.object,
      styles: React.PropTypes.object
  }
;


@ContextProvider(Context, ContextType)
export default class TemplateComponent extends React.Component {

  render() {
    return (
      <Grid fluid>
        <Menu/>
        <div className="container">
          {this.props.children}
        </div>
      </Grid>
    )
  }

}
