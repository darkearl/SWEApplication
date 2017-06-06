import React from 'react'
import { TouchableOpacity } from 'react-native'
import Styles from './styles'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { Colors, Metrics } from '../assets/themes'

export default {
  drawerButton (navigation) {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')} style={Styles.buttons}>
        <AwesomeIcon name='bars'
              size={Metrics.icons.medium}
              color={Colors.white}
              style={Styles.icon}
        />
      </TouchableOpacity>
    )
  },
  addNotificationButton(navigation) {
    return (
      <TouchableOpacity onPress={()=>navigation.navigate('Send')} style={Styles.buttons}>
        <IonIcon name='ios-add'
                  size={Metrics.icons.medium}
                  color={Colors.white}
                  style={Styles.icon}
        />
      </TouchableOpacity>
    )
  },
  backButton (navigation) {
    return (
      <TouchableOpacity onPress={()=>navigation.goBack()} style={Styles.buttons}>
        <IonIcon name='ios-arrow-back'
              size={Metrics.icons.medium}
              color={Colors.white}
              style={Styles.icon}
        />
      </TouchableOpacity>
    )
  }

}
