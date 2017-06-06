import React from 'react';
import { StackNavigator } from 'react-navigation';
import TabIcon from '../components/TabIcon';
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles';

import Home from '../containers/Home';

const TabHome = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabIcon selected={focused} name='ios-home-outline'/>
      ),
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.headerTitleStyle,
      headerBackTitleStyle: styles.leftButtons
    }
  }
});

export default TabHome;