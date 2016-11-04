import React, { Component } from 'react';
import { Navigator }        from 'react-native';


export default class Navigator extends Component {

  render() {
    return (
      <Navigator
        initialRoute={{ index: 0 }}
        renderScene={(route, navigator) => {
          switch (route.id) {
            case 'first':
              return (<First navigator={navigator} title="first"/>);
            case 'second':
              return (<Second navigator={navigator} title="second" />);
          }
        }}
      />
    )
  }

}
