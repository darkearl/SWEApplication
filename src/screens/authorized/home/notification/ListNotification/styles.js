import { StyleSheet } from 'react-native';
import { Colors, Metrics, ApplicationStyles } from '../../../../../assets/themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  contentContainerStyle:{
    //for scrollview
    flex:1,
    justifyContent:'center',
  },
  row: {
    width: Metrics.screenWidth - Metrics.doubleBaseMargin * 2,
    height: 100,
    justifyContent: 'center',
    margin: Metrics.baseMargin,
    backgroundColor: Colors.backgroundColorOpacity,
    paddingHorizontal: Metrics.doubleBaseMargin,
    borderLeftWidth: 2
  },
  containerFirstLabel:{
    flexDirection: 'row',
    marginBottom: Metrics.baseMargin,
    justifyContent: 'space-between'
  },
  containerTime:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  topLabel: {
    color: Colors.text,
    alignItems: 'flex-start',
    marginLeft: Metrics.baseMargin
  },
  label: {
    color: Colors.text,
  },
  listContent: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  thumbImage: {
    width: Metrics.icons.medium,
    height: Metrics.icons.medium,
    borderRadius: Metrics.icons.small,
  },
  headerSection:{
    margin: Metrics.baseMargin,
    width: Metrics.screenWidth - Metrics.doubleBaseMargin * 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }

})