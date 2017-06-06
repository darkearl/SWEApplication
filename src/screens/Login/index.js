import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/User';
import LoginForm from './LoginForm';
import { View, Image, ScrollView, Linking } from 'react-native';
import {Images} from '../../assets/themes';
import styles from './styles';

class Login extends Component {

  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleRegisterRoute = this.handleRegisterRoute.bind(this);
  };
  handleRegisterRoute(){
    const {navigate} = this.props.navigation;
    navigate('Register');
    // Linking.openURL('http://member.release.kyotokimono-rental.com/Register').catch(err => console.error('An error occurred', err));
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


export default connect(mapStateToProps)(Login);