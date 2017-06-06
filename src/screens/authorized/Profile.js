import React from 'react'
import {View, Text} from 'react-native'
import NavItems from '../../navigations/NavItems';

class Profile extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Profile',
      headerRight: NavItems.drawerButton(navigation)
    }
  };

  render() {
    return (
      <View>
        <Text>Profile Screen</Text>
      </View>
    )
  }

}

export default Profile