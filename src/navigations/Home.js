import React from 'react';
import { TabNavigator } from 'react-navigation';
// import TabHome from './TabHome';
import TabNotification from './TabNotification';
import styles from './styles';

const HomeNavigation = TabNavigator({
  // TabHome: { screen: TabHome },
  TabNotification: { screen: TabNotification },
},{
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    lazyLoad: true,
    indicatorStyle: styles.tabBarIndicatorStyle,
    style: styles.tabBarContainer,
    iconStyle:styles.tabBarIconStyle
  },
  tabBarPosition: 'bottom',
  navigationOptions: {
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle,
    headerBackTitleStyle: styles.buttons
  }
});
export default HomeNavigation;