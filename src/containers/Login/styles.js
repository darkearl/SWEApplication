import { StyleSheet } from 'react-native';
import { Colors, Metrics, ApplicationStyles } from '../../assets/themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  ...ApplicationStyles.form,
  container: {

  },
  containerLogin: {
    paddingBottom: Metrics.baseMargin,
    flexGrow:1,
    justifyContent: 'center',
  },
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  section: {
    marginTop: Metrics.section,
    marginLeft: Metrics.section,
    marginRight: Metrics.section,
    flexGrow:1,
    justifyContent: 'space-between'
  },
  containerInput: {
  },
  text:{
    color: Colors.white,
    textAlign: 'center',
    marginTop: Metrics.baseMargin
  }
});