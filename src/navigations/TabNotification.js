import React from 'react';
import { StackNavigator } from 'react-navigation';
import TabIcon from '../components/TabIcon';
import Transitioner from '../components/Transitioner';
import styles from './styles';
import ListNotification from '../screens/authorized/home/notification/ListNotification';
import SendNotification from '../screens/authorized/home/notification/SendNotification';

const TabHome = StackNavigator({
  List: {
    screen: ListNotification,
    navigationOptions: {
      tabBarLabel: 'List notifications',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabIcon selected={focused} name='ios-chatbubbles-outline'/>
      ),
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.headerTitleStyle,
    }
  },
  Send: {
    screen: SendNotification,
    navigationOptions: {
      tabBarVisible:false,
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.headerTitleStyle,
      headerTintColor:'white',
      headerBackTitleStyle: {
        color: 'white'
      }
    }
  }
},{
  transitionConfig: Transitioner.slideFromBottom
});


export default TabHome;