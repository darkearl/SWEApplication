import { StackNavigator } from 'react-navigation';

import LaunchScreen from '../screens/LaunchScreen';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Authorized from './Authorized';

const RootNavigation = StackNavigator({
  Welcome: {screen: LaunchScreen},
  Login: {screen: Login},
  Register: {screen: Register},
  Authorized: {screen: Authorized}
},{
  headerMode: 'none',
});

export default RootNavigation;