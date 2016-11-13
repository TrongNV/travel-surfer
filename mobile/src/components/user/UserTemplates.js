import React, { Component } from 'react';
import { Text, View, Modal, TouchableHighlight, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import InputWithLabel from '../InputWithLabel';


export default class UserTemplates extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      signUpInfos: context.Structure.signUpInfos,
      signInInfos: context.Structure.signInInfos,
      forgetPassword: false,
    };
  }

  static contextTypes = {
    Styles: React.PropTypes.object,
    Structure: React.PropTypes.object
  }

  handleSignUpInfos = (key, val) => {
    let signUpInfos = { ...this.state.signUpInfos };
    signUpInfos[key] = val;
    this.setState({ signUpInfos });
  }

  handleSignInInfos = (key, val) => {
    let signInInfos = { ...this.state.signInInfos };
    signInInfos[key] = val;
    this.setState({ signInInfos });
  }

  resetPassword = () => {
    console.log('send a password reset email to :', this.state.signInInfos.email);
  }

  render() {
    const { Styles, Structure } = this.context;
    const { Modals:CSS } = Styles;

    const { signUpInfos, signInInfos, forgetPassword } = this.state;
    const { element, onPress, userSignUp, userSignIn } = this.props;
    const { handleSignUpInfos, handleSignInInfos, resetPassword } = this;

    const goBack = <View>
            <TouchableHighlight onPress={ onPress.bind(null, {signIn:false, signUp:false}) }>
              <Icon name="chevron-left" size={ 13 } color="#006e9f"> back</Icon>
            </TouchableHighlight>
          </View>;
    const switchFieldsTypeAccount = (flag1, flag2, text) => <View>
            <TouchableHighlight onPress={ onPress.bind(null, {signIn:flag1, signUp:flag2}) }>
              <Icon name="chevron-right" size={ 13 } color="#006e9f"> {text}</Icon>
            </TouchableHighlight>
          </View>;

    switch (element) {
      case 'closeUserModal' :
        return  <TouchableHighlight style={ CSS.close }
                  onPress={ onPress.bind(null, {modal: false, signIn: false, signUp: false}) }>
                  <Icon name="times-circle" size={ 16 } color="#666"/>
                </TouchableHighlight>;

      case 'typeAccount' :
        return  <View style={ CSS.selectTypeAccountBox }>
                  <TouchableHighlight onPress={ onPress.bind(null, {signUp:true}) }>
                    <Text style={ CSS.typeAccountBtn }>Create a new account</Text>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={ onPress.bind(null, {signIn:true}) }>
                    <Text style={ CSS.typeAccountBtn }>Already a user</Text>
                  </TouchableHighlight>
                </View>;

      case 'signUp' :
        return  <View style={ CSS.fieldsBoxWrapper }>
                  { goBack }
                  <View style={ CSS.fieldsBox }>
                    {
                      Structure.signUpFields.map( ({ref, label, placeholder}, i) => {
                        return (
                          <InputWithLabel key={i} label={ label }>
                            <TextInput ref={ ref } placeholder={ placeholder }
                              secureTextEntry={ ref === 'password' }
                              style={ CSS.inputWithLabelEntry }
                              value={ signUpInfos[ref] }
                              onChangeText={ (val) => handleSignUpInfos(ref, val) }/>
                          </InputWithLabel>
                        )
                      })
                    }
                  </View>
                  <TouchableHighlight
                    style={ CSS.signUpBtn }
                    onPress={ () => userSignUp(signUpInfos) }>
                    <Text style={ CSS.signUpBtnText }>Create my Account</Text>
                  </TouchableHighlight>
                  { switchFieldsTypeAccount(true, false, 'Already a user') }
                </View>;

      case 'signIn' :
        return  <View style={ CSS.fieldsBoxWrapper }>
                  { goBack }
                  <View style={ CSS.fieldsBox }>
                    {
                      Structure.signInFields.map( ({ref, placeholder}, i) => {
                        return ref !== 'password' || !forgetPassword
                        ? <TextInput key={i} ref={ ref } placeholder={ placeholder }
                            secureTextEntry={ ref === 'password' }
                            style={ CSS.signInField }
                            value={ signInInfos[ref] }
                            onChangeText={ (val) => handleSignInInfos(ref, val) }/>
                        : null
                      })
                    }
                  </View>
                  {
                    !forgetPassword && <View>
                      <TouchableHighlight style={ CSS.forgetPassword }
                        onPress={ () => setState({ forgetPassword:true }) }>
                        <Text style={ CSS.forgetPasswordText }>forget your password ?</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={ CSS.signInBtn }
                        onPress={ () => userSignIn(signUpInfos) }>
                        <Text style={ CSS.signInBtnText }>Sign In</Text>
                      </TouchableHighlight>
                    </View>
                  }
                  {
                    forgetPassword && <TouchableHighlight
                      style={ CSS.signInBtn }
                      onPress={ () => resetPassword() }>
                      <Text style={ CSS.signInBtnText }>Send a password reset</Text>
                    </TouchableHighlight>
                  }
                  { switchFieldsTypeAccount(false, true, 'Create new account') }
                </View>
    }

    return (
      <View><Text style={{ color:'grey' }}>User Template Component</Text></View>
    );
  }
}
