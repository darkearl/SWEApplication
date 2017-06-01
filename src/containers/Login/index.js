import React, { Component } from 'react';
import { connect } from 'react-redux';
import { focus } from 'redux-form';
import { login } from './actions';
import LoginForm from './LoginForm';
import { View, Image, ScrollView, Linking } from 'react-native';
import {Images} from '../../assets/themes';
import styles from './styles';

class Login extends Component {

  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  };
  handleRegisterRoute(){
    // Actions.register();
    Linking.openURL('http://member.release.kyotokimono-rental.com/Register').catch(err => console.error('An error occurred', err));
  }
  handleOnSubmit(values){
    let {email, password} = values;
    this.props.dispatch(login(email,password));
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage}/>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={Images.logo}/>
          </View>
          <LoginForm
            userReducer={this.props.userReducer}
            onSubmit={this.handleOnSubmit}
            focusField={this.props.focusField}
            handleRegisterRoute={this.handleRegisterRoute}
          />
        </ScrollView>
      </View>

    );
  }
}

function mapStateToProps(state) {
  return {
    userReducer : state.user
  }
}

function mapDispatchToProps(dispatch){
  return{
    focusField : (form,field) => dispatch(focus(form,field))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);