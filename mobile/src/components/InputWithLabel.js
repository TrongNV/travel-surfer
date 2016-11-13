import React, { Component } from 'react';
import { Text, View } from 'react-native';


export default class InputWithLabel extends Component {

  static contextTypes = {
    Styles: React.PropTypes.object
  }

  render () {
    const { Modals:CSS } = this.context.Styles;
    return (
      <View style={ CSS.inputWithLabelWrapper}>
        <View style={ CSS.inputWithLabelTextWrapper }>
          <Text style={ CSS.inputWithLabelText }>{this.props.label}</Text>
        </View>
        {this.props.children}
      </View>
    )
  }
}
