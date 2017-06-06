import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Field,reduxForm } from 'redux-form';
import {View, Text, TouchableOpacity, TouchableHighlight, KeyboardAvoidingView} from 'react-native';
import styles from './styles';
import { Input } from '../../components/Form';
import Loading from '../../components/Loading';

const validate = values => {
  let {email, password} = values
  const errors = {};

  return errors
};

class LoginForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    userReducer: PropTypes.object
  };
  constructor(props){
    super(props)
  }

  render() {
    const { handleLoginRoute, handleSubmit, userReducer, pristine, submitting, onSubmit } = this.props;
    const disable = (pristine || submitting);
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.section}>
        <Loading visible={userReducer.isFetching}/>
        <View style={styles.containerInput}>
          <Field
            name='email'
            component={Input}
            keyboardType="email-address"
            placeholder="email"
            icon="envelope-o"
            onSubmitEditing={()=>this.passwordField.focus()}
          />
          <Field
            name='password'
            component={Input}
            secureTextEntry
            placeholder="password"
            icon="lock"
            refName={(c)=>this.passwordField = c}
            last
          />
        </View>
        <View>
          <TouchableOpacity style={disable ? styles.buttonDisabled : styles.button} onPress={handleSubmit(onSubmit)} disabled={disable} >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableHighlight onPress={()=>handleLoginRoute()} underlayColor='transparent'>
            <Text style={styles.text}>Back to login</Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default reduxForm({
  form: 'registerForm',
  validate
})(LoginForm);