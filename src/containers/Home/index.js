import React, {Component, PropTypes} from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';
import { Images } from '../../assets/themes';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';
// Styles
import styles from './styles'

class Home extends React.Component {
  testRoute(){
    Actions.login();
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage}/>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.centered}>
            <TouchableOpacity onPress={() => this.testRoute()}>
              <Text>home page</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }

}

export default Home