import { StyleSheet } from 'react-native';
import { Colors, Metrics, ApplicationStyles } from '../../assets/themes';


const FONT_SIZE = 16;
const OPTION_CONTAINER_HEIGHT = 400;

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  ...ApplicationStyles.form,
  overlayStyle: {
    // backgroundColor: 'rgba(0,0,0,0.7)',
    flex:1,
  },

  optionContainer: {
    marginHorizontal: Metrics.section,
    height:OPTION_CONTAINER_HEIGHT,
    backgroundColor:'rgba(255,255,255,0.8)',
    top:(Metrics.screenHeight-OPTION_CONTAINER_HEIGHT)/2
  },

  cancelContainer: {
    marginHorizontal: Metrics.section,
    top:(Metrics.screenHeight-OPTION_CONTAINER_HEIGHT)/2 + 10
  },

  selectStyle: {
    marginBottom: Metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth:1,
    borderBottomColor:Colors.inputUnderlineColor,
  },

  selectTextStyle: {
    color: Colors.textInputColor,
    paddingHorizontal: Metrics.marginHorizontal,
    flex: 1,
  },

  cancelStyle: {
    ...ApplicationStyles.form.button
  },

  cancelTextStyle: {
    ...ApplicationStyles.form.buttonText
  },

  optionStyle: {
    padding: Metrics.baseMargin,
    borderBottomWidth: 0.5,
    borderBottomColor:'rgba(0,118,255,0.9)'
  },

  optionTextStyle: {
    textAlign: 'center',
    fontSize: FONT_SIZE,
    color: 'rgba(0,118,255,0.9)'
  },

  sectionStyle: {
    padding: Metrics.baseMargin * 2,
    borderBottomWidth: 0.5,
    borderBottomColor:Colors.inputUnderlineColor,
  },

  sectionTextStyle: {
    textAlign: 'center',
    fontSize: FONT_SIZE
  }
})