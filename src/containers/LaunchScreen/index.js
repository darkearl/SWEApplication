import React, { Component } from 'react';
import {ScrollView, View,  Image} from 'react-native';
import { connect } from 'react-redux';
import { Images } from '../../assets/themes';
import Loading from '../../components/Loading';
import styles from './styles';

class LaunchScreen extends Component {
  render() {
    const {userReducer} = this.props
    return (
      <View style={styles.mainContainer}>
        <Loading visible={userReducer.isFetching}/>
        <Image source={Images.background} style={styles.backgroundImage}/>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.centered}>
            <Image source={Images.logo} style={styles.logo} />
          </View>
        </ScrollView>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    userReducer : state.user
  }
}

export default connect(mapStateToProps)(LaunchScreen);