import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");


let Swiper = StyleSheet.create({
      slides: {
        flex: 1
        , alignItems: 'center'
        , top: 100
      },

      title: {
        color: '#000'
        , fontSize: 22
        , fontWeight: 'bold'
        , marginBottom: 5
      },

      body: {
        color: '#222'
        , fontSize: 18
        , textAlign: 'center'
        , marginLeft: 50
        , marginRight: 50
      },

      paginationStyle: {
        bottom: 270
      },

      dot: { backgroundColor: '#F5F5F5', width: 10, height: 10, borderRadius: 5, marginLeft: 5, marginRight: 5 },

      activeDot: { backgroundColor: '#DDD', width: 10, height: 10, borderRadius: 5, marginLeft: 5, marginRight: 5 }
    })
  , Tour = StyleSheet.create({
      tour1bg: {
        height: height - 40
        , resizeMode: 'stretch'
      },

      tour1bgContainer: {
        flex: 1
        , alignItems: 'stretch'
      },

      skipTour: {
        color: '#FFF'
        , fontSize: 12
        , textAlign: 'center'
        , height: 20
      },

      skipTourWrapper: {
        bottom: 55
      }
    })
  , Journey = StyleSheet.create({
      addBtn: {
        fontWeight: 'bold'
        , fontSize: 18
        , color: '#000'
        , textAlign: 'center'
        , top: 10
        , width: width
        , height: 45
      },

      addWrapper: {
        backgroundColor: '#ffb74d'
        , bottom: 50
        , borderWidth: 2
        , borderColor: '#000'
      }
    })
  , Toolbar = StyleSheet.create({
      wrapper: {
        flex: 1
        , flexDirection: 'row'
        , justifyContent: 'space-between'
        , paddingLeft: 10
        , paddingRight: 10
        , padding: 20
        , backgroundColor: '#006e9f'
      },
      humbergur: {},
      title: {},
      btn: {}
    })
  ;

module.exports = {
  Swiper   : Swiper,
  Tour     : Tour,
  Journey  : Journey,
  Toolbar  : Toolbar
}
