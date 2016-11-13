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
    height: 450,
    backgroundColor: 'white',
    borderRadius: 10,
  },

  selectTypeAccountBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 450,
  },

  fieldsBoxWrapper: {
    padding: 10,
    justifyContent: 'space-between',
    height: 450,
  },

  fieldsBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  close: {
    top: 20,
    zIndex: 1,
    right: 5,
    alignSelf: 'flex-end',
  },

  typeAccountBtn: {
    width: 180,
    padding: 10,
    backgroundColor: '#006e9f',
    color: '#FFF',
    textAlign: 'center',
    margin: 20,
  },

  inputWithLabelWrapper: {
    flexDirection: 'row',
    flex: 1,
  },

  inputWithLabelTextWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 20,
    width: 80,
  },

  inputWithLabelText: {
    fontWeight: '900',
  },

  inputWithLabelEntry: {
    justifyContent: 'center',
    width: 160,
    alignItems: 'flex-start',
  },

  signUpBtn: {
    alignItems: 'flex-end',
  },

  signUpBtnText: {
    width: 153,
    padding: 7,
    backgroundColor: '#006e9f',
    color: '#FFF',
    textAlign: 'center',
    margin: 10,
    alignItems: 'flex-end',
  },

  signInField: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  },

  signInBtn: {
    alignItems: 'center',
  },

  signInBtnText: {
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: 200,
    backgroundColor: '#006e9f',
    color: '#FFF',
  },

  forgetPassword: {
    alignItems: 'center',
  },

  forgetPasswordText: {
    alignItems: 'center',
    textAlign: 'flex-end',
    width: 200,
    color: '#006e9f',
    fontSize: 9,
  }

})

export const Loader = StyleSheet.create({
  ui: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    position: 'absolute',
    top: 0,
    zIndex: 999999,
  }
})