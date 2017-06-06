import React, { Component } from 'react';
import { View,StatusBar } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import RootNavigation from './navigations';

class AppNavigator extends Component {

  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar barStyle="light-content"/>
        <RootNavigation
          navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav
          })}
        />
      </View>
    );
  }
}

export default connect(state => ({ nav: state.nav }))(AppNavigator);