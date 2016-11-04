import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");


export const Nav = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    padding: 8,
    backgroundColor: '#006e9f',
  },
  bars: {},
  title: {
    color: 'white',
    fontWeight: '900',
    fontSize: 20,
    paddingBottom: 2,
  },
  btn: {
    paddingTop: 6,
  },
})

export const Slider = StyleSheet.create({
  slider1_bg: {
    height: height - 118,
    resizeMode: 'stretch',
  },

  slides: {
    flex: 1,
    alignItems: 'center',
    top: 100,
  },

  title: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  desc: {
    color: '#222',
    fontSize: 18,
    textAlign: 'center',
    marginLeft: 50,
    marginRight: 50,
  },

  paginationStyle: {
    bottom: 285
  },

  dot: { backgroundColor: '#F5F5F5', width: 10, height: 10, borderRadius: 5, marginLeft: 5, marginRight: 5 },

  activeDot: { backgroundColor: '#DDD', width: 10, height: 10, borderRadius: 5, marginLeft: 5, marginRight: 5 }
})

export const Tour = StyleSheet.create({
  skipWrapper: {
    bottom: 20,
    height: 20,
  },

  skip: {
    color: '#FFF',
    fontSize: 12,
    textAlign: 'center',
    height: 20,
  },
})

export const Journey = StyleSheet.create({
  add: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    top: 10,
    width: width,
    height: 45,
  },

  addWrapper: {
    backgroundColor: '#ffb74d',
    bottom: 20,
    borderWidth: 2,
    borderColor: '#000',
  },
})

export const Modals = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  content: {
    height: 300,
    backgroundColor: 'white',
    borderRadius: 10,
  },

  typeAccountBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
  },

  fieldsBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 270,
  },

  close: {
    top: 20,
    zIndex: 1,
    right: 5,
    alignSelf: 'flex-end',
  },

  textBtn: {
    width: 180,
    padding: 10,
    backgroundColor: '#006e9f',
    color: '#FFF',
    textAlign: 'center',
    margin: 20,
  },

  link: {
    color: "#006e9f",
    backgroundColor: '#EEE',
    // padding: 5,
    // margin: 5,
  },

  backLink: {
    color: "#006e9f"
  }
})
