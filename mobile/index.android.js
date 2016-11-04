import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, StatusBar } from 'react-native';

import Swiper from 'react-native-swiper';
import Icon   from 'react-native-vector-icons/FontAwesome';

import ContextProvider  from './src/helpers/ContextProvider';
import Structure        from './src/settings/Structure';
import * as Styles      from './src/settings/Styles';

import Nav      from './src/components/Nav';
import Slider   from './src/components/Slider';

const Context = {
  Structure: Structure,
  Styles: Styles
};
const ContextTypes = {
  Structure: React.PropTypes.object,
  Styles: React.PropTypes.object
};


@ContextProvider(Context, ContextTypes)
export default class travelsurfer extends Component {
  render() {
    const { Tour, Journey } = Styles;
    return (
      <View>
        <StatusBar backgroundColor="#006e9f"/>
        <Nav/>
        <Slider/>
        <View style={Tour.skipWrapper}><Text style={Tour.skip}>Skip Tour</Text></View>
        <View style={Journey.addWrapper}><Text style={Journey.add}>ADD A JOURNEY</Text></View>
      </View>
    )
  }
}


AppRegistry.registerComponent('travelsurfer', () => travelsurfer);
