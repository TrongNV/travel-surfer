import React, { Component }   from 'react';
import { Text, View, Image }  from 'react-native';

import Swiper from 'react-native-swiper';
import Icon   from 'react-native-vector-icons/FontAwesome';

import Structure from '../settings/Structure';
import * as CSS from '../settings/Styles';

const img_bg = 'tour1_img';


export default class Slider extends Component {

  _onMomentumScrollEnd(e, state, context) {
    console.log('HELLO LOLLO', state, context.state, this);
  }

  render() {
    const dot = <View style={CSS.Slider.dot}/>;
    const activeDot = (<View style={CSS.Slider.activeDot}/>);

    return (
      <Image source={{uri:img_bg}} style={CSS.Slider.slider1_bg}>
        <Swiper
          dot={dot}
          activeDot={activeDot}
          paginationStyle={CSS.Slider.paginationStyle}
          onMomentumScrollEnd={this._onMomentumScrollEnd}>
          {
            Structure.Slides.Tour1.map( (slide, s) => {
              return (
                <View key={s} style={CSS.Slider.slides}>
                  <Text style={CSS.Slider.title}>{slide.title}</Text>
                  <Text style={CSS.Slider.desc}>{slide.desc}</Text>
                </View>
              )
            })
          }
        </Swiper>
      </Image>
    )
  }
}
