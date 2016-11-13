import React, { Component }               from 'react';
import { Text, View, Modal, TouchableHighlight, ActivityIndicator , Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import UserTemplates from './UserTemplates';
import * as Services from '../../services';


export default class User extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      modal: true,
      signUp: true,
      signIn: false,
      loader: false,
    };
  }

  static contextTypes = {
    Styles: React.PropTypes.object
  }

  userSignUp = ( data ) => {
    this.setState({ loader:true });
    Services.userSignUp(data, this.stopLoaderAnimation);
  }

  userSignIn = ( data ) => {
    this.setState({ loader:true });
    Services.userSignIn(data, this.stopLoaderAnimation);
  }

  stopLoaderAnimation = () => { this.setState({ loader:false }); }

  render() {
    const { Styles } = this.context;
    const { userSignUp, userSignIn, setState } = this;
    const { modal, signUp, signIn, loader } = this.state;

    const { height } = Dimensions.get("window");
    const loaderStyle = loader ? {height:height} : {height:0};

    return (
      <View>
        <TouchableHighlight onPress={() => setState({ modal: !modal })}>
          <Icon style={ Styles.Nav.btn } name="user" size={ 16 } color="#fff"/>
        </TouchableHighlight>
        <Modal
          animationType="fade"
          transparent={ true }
          visible={ modal }
          onRequestClose={() => setState({ modal:false })}>
          <View style={ Styles.Modals.wrapper }>
            <UserTemplates element="closeUserModal" onPress={(obj) => setState(obj)}/>
            <View style={ Styles.Modals.content }>
              {
                !signUp && !signIn && <UserTemplates
                  element="typeAccount"
                  onPress={(obj) => setState(obj)}
                />
              }
              {
                signUp && <UserTemplates
                  element="signUp"
                  onPress={(obj) => setState(obj)}
                  userSignUp={ userSignUp }
                />
              }
              {
                signIn && <UserTemplates
                  element="signIn"
                  onPress={(obj) => setState(obj)}
                  userSignIn={ userSignIn }
                />
              }
            </View>
          </View>
          <ActivityIndicator
            animating={loader}
            style={[Styles.Loader.ui, loaderStyle]}
            size="large"/>
        </Modal>
      </View>
    )
  }
}
