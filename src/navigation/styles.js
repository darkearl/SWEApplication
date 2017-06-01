import { Colors, Metrics, Fonts } from '../assets/themes'

export default {
  container: {
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
  title: {
    textAlign: 'center',
    color: Colors.text,
    fontWeight: 'bold',
    fontSize: Fonts.size.input
  },
  middle: {
    alignSelf: 'center',
  },
  rightButtons: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  leftButtons: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  icon:{
    backgroundColor: Colors.transparent,
    justifyContent: 'center',
    marginTop: Metrics.baseMargin,
  },
  tabBar:{
    backgroundColor: Colors.backgroundColorOpacity,
  }
}
