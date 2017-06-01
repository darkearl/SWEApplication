import React from 'react'
import { connect } from 'react-redux';
import {ScrollView, View, Text, Image, ListView} from 'react-native';
import { Images, Colors, Metrics } from '../../assets/themes';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import { fetchNotifications } from './actions';
// Styles
import styles from './styles'

const STATUS = (key) => {
  let color;
  switch(key) {
    case 1:
      color = {borderLeftColor: Colors.confirmColor}
      break;
    case 2:
      color = {borderLeftColor: Colors.unConfirmColor}
      break;
    case 3:
      color = {borderLeftColor: Colors.cancelColor}
      break;
  }
  return color;
}
const convertSectionMap = (arrObject) => {
  let sectionMap = {};
  Object.keys(arrObject).map((notificationID)=>{
    const item = arrObject[notificationID];
    let category = moment(item.time).format('YYYY-MM-DD');
    if(!sectionMap[category]){
      sectionMap[category] = [];
    }
    sectionMap[category].push(item)
  });
  return sectionMap;
};
class ListNotification extends React.Component {
  constructor (props) {
    super(props);
    this.state ={
      dataSource:this.props.notificationsData
    }
  }
  componentWillMount(){
    this.props.dispatch(fetchNotifications());
  }
  componentWillReceiveProps(nextProps){
    let dataObjects = convertSectionMap(nextProps.notificationsData);
    this.setState({dataSource: dataObjects})
  }
  renderSectionHeader (sectionData, category){
    return (
      <View style={styles.headerSection}>
        <Text style={styles.label}>{moment(category).format('dddd')}</Text>
        <Text style={styles.label}>{moment(category).format('LL')}</Text>
      </View>
    )
  }
  renderRow (rowData) {
    return (
      <View style={[styles.row,STATUS(rowData.status)]}>
        <View style={styles.containerFirstLabel}>
          <View style={styles.containerTime}>
            <Icon name='md-time'
                  size={Metrics.icons.medium}
                  color={Colors.white}
                  style={styles.icon}
            />
            <Text style={styles.topLabel}>{moment(rowData.time).format('h:mm a')}</Text>
          </View>
          <Image source={Images.avarta1} style={styles.thumbImage}/>
        </View>
        <Text style={styles.label}>{rowData.message}</Text>
      </View>
    )
  }
  render() {
    const rowHasChanged = (r1, r2) => r1 !== r2;
    const sectionHeaderHasChanged = (s1, s2) => {return s1 !== s2;};
    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged,sectionHeaderHasChanged});
    const dataSource = ds.cloneWithRowsAndSections(this.state.dataSource);
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage}/>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
          {dataSource && <ListView
            contentContainerStyle={styles.listContent}
            dataSource={dataSource}
            renderRow={this.renderRow}
            renderSectionHeader={this.renderSectionHeader}
            pageSize={15}
          />
          }
        </ScrollView>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    notificationsData : state.notifications.data
  }
}

export default connect(mapStateToProps)(ListNotification);