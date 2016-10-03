import React, { Component }               from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';
import Swiper                             from 'react-native-swiper';
import * as Styles                        from './src/settings/styles';
import Context                            from './src/settings/context';

const tour1bg = 'tourbg1';


export default class travelsurfer extends Component {

  _onMomentumScrollEnd (e, state, context) {
    console.log('HELLO LOLLO', state, context.state)
  }

  render() {
    let SS        = Styles.Swiper
      , ST        = Styles.Tour
      , SJ        = Styles.Journey
      , TB        = Styles.Toolbar
      , dot       = <View style={SS.dot}/>
      , activeDot = <View style={SS.activeDot}/>
      ;

    return (
      <View>
        <View style={ST.tour1bgContainer}>
{
  // <View style={TB.wrapper}>
  //             <Text style={TB.humbergur}>Add</Text>
  //             <Text style={TB.title}>This is the title</Text>
  //             <Text style={TB.btn}>Like</Text>
  //         </View>
        }
          <Image source={{uri:tour1bg}} style={ST.tour1bg}>
            <Swiper
              dot={dot}
              activeDot={activeDot}
              paginationStyle={SS.paginationStyle}
              onMomentumScrollEnd={this._onMomentumScrollEnd}>
              {
                Context.Slides.Tour1.map( (slide, s) => {
                  return (
                    <View key={s} style={SS.slides}>
                      <Text style={SS.title}>{slide.title}</Text>
                      <Text style={SS.body}>{slide.body}</Text>
                    </View>
                  )
                })
              }
            </Swiper>
          </Image>
          <View style={ST.skipTourWrapper}><Text style={ST.skipTour}>Skip Tour</Text></View>
        </View>
        <View style={SJ.addWrapper}><Text style={SJ.addBtn}>ADD A JOURNEY</Text></View>
      </View>
    )
  }
}


AppRegistry.registerComponent('travelsurfer', () => travelsurfer);
