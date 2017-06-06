import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import Home from './Home';
import DrawerContent from '../components/Drawer/DrawerContent';


const Authorized = DrawerNavigator({
  Home: { screen: Home },
  // Profile: { screen: Profile },
  // Setting: { screen: Setting },
  // Logout: { screen: '' },
}, {
  contentComponent: (props) => <DrawerContent {...props} />
});

export default Authorized;