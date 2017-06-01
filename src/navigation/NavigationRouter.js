import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import { connect } from 'react-redux'
import NavigationDrawer from './NavigationDrawer'
import CustomNavbar from './CustomNavbar'
import TabIcon from '../components/TabIcon'

// screens identified by the router
import Home from '../containers/Home';
import Login from '../containers/Login';
import LaunchScreen from '../containers/LaunchScreen';
import SendMessage from '../containers/SendMessage';
import ListNotification from '../containers/ListNotification';

import Styles from './styles';
/* **************************
 * Documentation:
 * https://github.com/aksonov/react-native-router-flux
 * https://oblador.github.io/react-native-vector-icons (Ionicons)
 ***************************/
const RouterWithRedux = connect()(Router);
class NavigationRouter extends Component {
  render () {
    return (
      <RouterWithRedux navBar={CustomNavbar}>
        <Scene key='drawer' component={NavigationDrawer} open={false} tabs>
          <Scene key='drawerChildrenWrapper' >
            <Scene initial key="launchScreen" title='LaunchScreen' component={LaunchScreen} hideNavBar />
            <Scene key="login" component={Login} hideNavBar  />
            <Scene key="main" tabs tabBarStyle={Styles.tabBar} type="replace">
              <Scene key="home"
                     icon={TabIcon}
                     tabIcon="ios-home-outline"
                     title='HomeScreen'
                     component={Home} />
              <Scene key="sendMessage"
                     title='SendMessage'
                     icon={TabIcon}
                     tabIcon="ios-chatbubbles-outline"
                     component={SendMessage} />
            </Scene>
            <Scene key="listNotification" title="List Notification" showBackButton component={ListNotification}  />
          </Scene>
        </Scene>
      </RouterWithRedux>
    )
  }
}

export default NavigationRouter
