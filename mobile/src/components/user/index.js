import React, { Component }               from 'react';
import { Text, View, Modal, TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import UserTemplates from './UserTemplates';


export default class User extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      modal: true,
      newUser: false,
      oldUser: false,
    };
  }

  static contextTypes = {
    Styles: React.PropTypes.object
  }



  render() {
    const { Styles } = this.context;
    const { modal, newUser, oldUser } = this.state;

    return (
      <View>
        <TouchableHighlight onPress={() => this.setState({ modal: !modal })}>
          <Icon style={ Styles.Nav.btn } name="user" size={ 16 } color="#fff"/>
        </TouchableHighlight>
        <Modal
          animationType="fade"
          transparent={ true }
          visible={ modal }
          onRequestClose={() => this.setState({ modal:false })}>
          <View style={ Styles.Modals.wrapper }>
            <UserTemplates element="closeUserModal" onPress={(obj) => this.setState(obj)}/>
            <View style={ Styles.Modals.content }>
              { !newUser && !oldUser && <UserTemplates element="typeAccount" onPress={(obj) => this.setState(obj)}/> }
              {  newUser && <UserTemplates element="newUser" onPress={(obj) => this.setState(obj)}/> }
              {  oldUser && <UserTemplates element="oldUser" onPress={(obj) => this.setState(obj)}/> }
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}
