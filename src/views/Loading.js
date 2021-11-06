import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity,View,ActivityIndicator} from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import { Layout, Text, Button  } from 'react-native-ui-kitten';
import { Colors } from '../Colors';
import { Pixel,height,device} from '../Config';



class Loading extends Component{

    render(){
  	  const {show,background,style,progressStyle,margin,size,color}=this.props;
      const c=style?style:{backgroundColor:background?background:"rgba(255,255,255,0)"};
      const cc=progressStyle?progressStyle:{marginVertical:margin?margin:height/2};
      return(
      	<View>
      	{show?
        <View style={c}>
          {device=="ios"?
            <ActivityIndicator size={size=="small"} style={cc}  color={color?color:Colors.MAIN_BLUE_LIGHT}  />
            :
            <ProgressBar color={color?color:Colors.MAIN_BLUE_LIGHT}  style={cc} styleAttr={size} />
          }
        </View>
        :null}
        </View>
      );
  }
}


const styles = StyleSheet.create({
  container: {

  },
});

export default Loading;

