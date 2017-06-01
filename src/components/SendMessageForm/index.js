import React from 'react'
import { Input, Picker } from '../Form';
import { Field,reduxForm } from 'redux-form';
import {View, Text, TouchableOpacity, TouchableHighlight, KeyboardAvoidingView} from 'react-native';

// Styles
import styles from './styles'
const validate = values => {
  let {email, password} = values
  const errors = {};

  return errors
};
class SendMessageForm extends React.Component {

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.section}>
        <View style={styles.containerInput}>
          <Field name="selectVehicle" style={{left: 10}} component={Picker}/>
        </View>
      </KeyboardAvoidingView>
    )
  }

}
export default reduxForm({
  form: 'sendMessageForm',
  validate
})(SendMessageForm);
