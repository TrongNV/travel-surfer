import React, { Component }               from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Bars   from './Bars';
import User   from './user';


export default class Nav extends Component {
  constructor (props, context) {
    super(props, context);
  }

  static contextTypes = {
    Structure: React.PropTypes.object,
    Styles: React.PropTypes.object
  }

  render() {
    const { Styles, Structure } = this.context;
    return (
      <View style={Styles.Nav.wrapper}>
        <Bars/>
        <Text style={Styles.Nav.title}>{Structure.siteName}</Text>
        <User/>
      </View>
    )
  }
}
