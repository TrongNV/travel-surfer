import React, { Component } from 'react';
import { Text, View, Modal, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class UserTemplates extends Component {
  static contextTypes = {
    Styles: React.PropTypes.object
  }

  render() {
    const { Styles } = this.context;
    const { element, onPress } = this.props;

    const goBack = <View>
            <TouchableHighlight onPress={ onPress.bind(null, {oldUser:false, newUser:false}) }>
              <Icon style={ Styles.Nav.backLink } name="chevron-left" size={ 16 }>back</Icon>
            </TouchableHighlight>
          </View>;

    const switchFieldsTypeAccount = (flag1, flag2, text) => <View><TouchableHighlight
            onPress={ onPress.bind(null, {oldUser:flag1, newUser:flag2}) }
            style={ Styles.Nav.link }>
            <Icon name="chevron-right" size={ 16 }>{text}</Icon>
          </TouchableHighlight></View>;

    switch (element) {
      case 'closeUserModal' :
        return  <TouchableHighlight style={ Styles.Modals.close }
                  onPress={ onPress.bind(null, {modal: false, oldUser: false, newUser: false}) }>
                  <Icon name="times-circle" size={ 16 } color="#666"/>
                </TouchableHighlight>;

      case 'typeAccount' :
        return  <View style={ Styles.Modals.typeAccountBox }>
                  <TouchableHighlight onPress={ onPress.bind(null, {newUser:true}) }>
                    <Text style={ Styles.Modals.textBtn }>Create a new account</Text>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={ onPress.bind(null, {oldUser:true}) }>
                    <Text style={ Styles.Modals.textBtn }>Already a user</Text>
                  </TouchableHighlight>
                </View>;

      case 'newUser' :
        return  <View>
                  { goBack }
                  <View style={ Styles.Modals.fieldsBox }>
                    <Text>Create New Account fields</Text>
                  </View>
                  { switchFieldsTypeAccount(true, false, 'Already a user') }
                </View>;

      case 'oldUser' :
        return  <View>
                  { goBack }
                  <View style={ Styles.Modals.fieldsBox }>
                    <Text>Login User fields</Text>
                  </View>
                  { switchFieldsTypeAccount(false, true, 'Create new account') }
                </View>
    }

    return (
      <View><Text style={{ color:'grey' }}>User Template Component</Text></View>
    );
  }
}
