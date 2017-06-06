import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../assets/themes';

export default StyleSheet.create({
  headerStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Metrics.navBarHeight,
    paddingTop: Metrics.smallMargin,
    paddingHorizontal: Metrics.baseMargin,
    backgroundColor: Colors.backgroundColorOpacity,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerTitleStyle: {
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.text,
    fontWeight: 'bold',
    fontSize: Fonts.size.input
  },
  icon:{
    backgroundColor: Colors.transparent,
    justifyContent: 'center',
    marginTop: Metrics.baseMargin,
  },
  buttons: {
    flex: 1,
  },
  tabBarIndicatorStyle:{
    backgroundColor: Colors.transparent
  },
  tabBarContainer:{
    backgroundColor: Colors.background,
    elevation: 0
  },
  tabBarIconStyle:{
    width: Metrics.icons.small *2,
    height: Metrics.icons.small *2
  }
});