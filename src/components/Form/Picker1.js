import React,{Component} from 'react';
import {View, TextInput, Text, Picker} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

import ModalPicker from 'react-native-modal-picker'

import { Colors,Metrics } from '../../assets/themes';
import Icon from 'react-native-vector-icons/FontAwesome';
let index = 0;
const data = [
  { key: index++, section: true, label: 'Fruits' },
  { key: index++, label: 'Red Apples' },
  { key: index++, label: 'Cherries' },
  { key: index++, label: 'Cranberries' },
  { key: index++, label: 'Pink Grapefruit' },
  { key: index++, label: 'Raspberries' },
  { key: index++, section: true, label: 'Vegetables' },
  { key: index++, label: 'Beets' },
  { key: index++, label: 'Red Peppers' },
  { key: index++, label: 'Radishes' },
  { key: index++, label: 'Radicchio' },
  { key: index++, label: 'Red Onions' },
  { key: index++, label: 'Red Potatoes' },
  { key: index++, label: 'Rhubarb' },
  { key: index++, label: 'Tomatoes' }
];

export default class FormPicker extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
  };
  render() {
    const { input: { onChange,value,...inputProps }, style, options, labelKey='label', valueKey='value', meta: {touched, error}, ...custom } = this.props
    return (
      <View >
        <ModalPicker
          data={data}
          initValue="Select something yummy333!"
          onChange={(option)=>{ alert(`${option.label} (${option.key}) nom nom nom`) }} />


      </View>

    )
  }
}
//
// <Picker
//   {...inputProps}
//   selectedValue={value}
//   onValueChange= {onChange}
//   // children={children}
//   {...custom}
//   style={styles.containerPicker}
// >
//   {options && options.map(option => {
//     const label = option[labelKey];
//     const value = option[valueKey];
//     return <Picker.Item key={value} label={label} value={value} />
//   }) }
// </Picker>