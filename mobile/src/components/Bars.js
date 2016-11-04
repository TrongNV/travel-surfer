import React, { Component }   from 'react';
import { Text, View, Image }  from 'react-native';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

import Icon from 'react-native-vector-icons/FontAwesome';


export default class Bars extends Component {
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
      <View>
        <MenuContext>
          <Menu onSelect={(value) => alert(`User selected the number ${value}`)}>
            <MenuTrigger>
              <Icon style={Styles.Nav.btn} name="bars" size={16} color="#fff"/>
            </MenuTrigger>
            <MenuOptions>
              <MenuOption value={1}>
                <Text>One</Text>
              </MenuOption>
              <MenuOption value={2}>
                <Text>Two</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </MenuContext>
      </View>
    )
  }
}
