import React from 'react'
import { connect } from 'react-redux';
import { View, Image, ScrollView } from 'react-native';
import {Images} from '../../assets/themes';
import RegisterForm from './RegisterForm';
import { registerUser } from '../../actions/User';
// Styles
import styles from './styles'

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleLoginRoute = this.handleLoginRoute.bind(this);
  };
  handleLoginRoute(){
    const {navigate} = this.props.navigation;
    navigate('Login');
  }
  handleOnSubmit(values){
    let {email, password} = values;
    this.props.dispatch(registerUser(email,password));
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage}/>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={Images.logo}/>
          </View>
          <RegisterForm
            userReducer={this.props.userReducer}
            onSubmit={this.handleOnSubmit}
            handleLoginRoute={this.handleLoginRoute}
          />
        </ScrollView>
      </View>
    )
  }

}

function mapStateToProps(state) {
  return {
    userReducer : state.user
  }
}
export default connect(mapStateToProps)(Register);
