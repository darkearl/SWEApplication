import React from 'react'
import {connect} from 'react-redux';
import {ScrollView, View, Text, Image} from 'react-native';
import SendMessageForm from './SendMessageForm'
import { Images } from '../../../../../assets/themes';
import {pushNotifications} from '../../../../../actions/Notifications';
import NavItems from '../../../../../navigations/NavItems';

// Styles
import styles from './styles'

class SendNotification extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Send notifications',
      headerLeft: NavItems.backButton(navigation),
    }
  };
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  };
  handleOnSubmit(values){
    let { group,message } = values;
    this.props.dispatch(pushNotifications(message));
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage}/>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
          <SendMessageForm
            onSubmit={this.handleOnSubmit}
          />
        </ScrollView>
      </View>
    )
  }
}

export default connect()(SendNotification);