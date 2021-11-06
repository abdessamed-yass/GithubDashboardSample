import React, { Component } from 'react';
import { Text, StyleSheet, Image, View, ProgressBarAndroid, ActivityIndicator } from 'react-native';
import { height, Pixel, device, width ,mes} from './Config';
import mainService from './services/mainService';
import { connect } from 'react-redux';
import 'react-native-gesture-handler'

class Splash extends Component {

  async componentDidMount() {
    console.log("splash")
   // mainService.init(this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>cc</Text>  
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: 'center',

  },

  logo: {
    width: width,
    height: height
  },
});

export default connect(mainService.sp,mainService.dp)(Splash);

