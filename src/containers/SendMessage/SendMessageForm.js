import React from 'react'
import { Input, Picker } from '../../components/Form';
import { Field,reduxForm } from 'redux-form';
import {View, Text, TouchableOpacity, TouchableHighlight, KeyboardAvoidingView} from 'react-native';

// Styles
import styles from './styles'
const validate = values => {
  const errors = {};

  return errors
};
const options = [
  {
    label: 'All',
    value: '0'
  },
  {
    label: 'ABC',
    value: '1'
  }
];
class SendMessageForm extends React.Component {
  render() {
    const { handleSubmit, pristine, submitting, onSubmit } = this.props;
    const disable = (pristine || submitting);
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.section}>
        <View style={styles.containerInput}>
          <Field name="group" component={Picker} options={options} initValue="Select group"/>
          <Field
            name='message'
            component={Input}
            placeholder="Message"
          />
          <TouchableOpacity style={disable ? styles.buttonDisabled : styles.button} onPress={handleSubmit(onSubmit)} disabled={disable} >
            <Text style={styles.buttonText}>SEND</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}
export default reduxForm({
  form: 'sendMessageForm',
  validate
})(SendMessageForm);
