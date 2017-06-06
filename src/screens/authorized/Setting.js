import React from 'react'
import {View, Text} from 'react-native'
import NavItems from '../../navigations/NavItems';


class Setting extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Setting',
      headerRight: NavItems.drawerButton(navigation)
    }
  };
  render() {
    return (
      <View>
        <Text>Setting Screen</Text>
      </View>
    )
  }

}

export default Setting