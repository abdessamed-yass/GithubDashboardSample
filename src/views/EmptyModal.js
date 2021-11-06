import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert,StyleSheet,TouchableOpacity} from 'react-native';
import { Pixel,width,height} from '../Config';
import { Icon } from 'react-native-eva-icons';


class EmptyModal extends Component {

  render() {
    const {show,title,subTitle,toggle}=this.props;
    return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={show}
          >
          <View style={styles.modal}>
            <View style={styles.container}>
              <View style={styles.valid}>
              <Icon name={'alert-triangle-outline'} width={Pixel*16} height={Pixel*14} fill='#fff' />
              </View>
              <Text style={styles.title} >{title}</Text>
              <Text style={styles.content} >{subTitle}</Text>
              <TouchableOpacity style={styles.close} onPress={toggle} >
                <Text style={styles.closeText} >D'accord</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
    );
  }
}

const styles=StyleSheet.create({
  modal:{
    width:width,
    height:height,
    backgroundColor: "rgba(34, 43, 69, 0.54)"
  },
  container:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    padding:Pixel*16,
    marginTop:Pixel*82,
    marginHorizontal:Pixel*24,
    backgroundColor:"#fff",
    borderRadius:Pixel*6
  },
  valid:{
    width: Pixel*38.7,
    height: Pixel*38.7,
    borderRadius:Pixel*38.7,
    backgroundColor: "#f0da23",
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    marginTop:20,
    fontSize: Pixel*20,
    fontWeight: "600",
    textAlign: "center",
    color: "#222b45",

  },
  content:{
    fontSize: Pixel*8.7,
    fontWeight: "300",
    textAlign: "center",
    color: "#222b45",
    marginTop:Pixel*20
  },
  close:{
    borderRadius: Pixel*2.7,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: Pixel*0.7,
    borderColor: "#aac1ca",
    justifyContent:'center',
    alignItems:'center',
    padding:Pixel*8,
    marginTop:Pixel*20,
    alignSelf: 'stretch',
  },
  closeText:{
    fontSize: Pixel*9.3,
    fontWeight: "500",
    color: "#8f9bb3",
  },
})
export default EmptyModal;