import React, { Component } from 'react';
import { StyleSheet,Text,TouchableOpacity} from 'react-native';
import { Pixel} from '../Config';
import Loading from './Loading';

class Button extends Component{
  render(){ 
      const {text,press,style,textStyle,type,icon,disabled,loading,loadColor,iconRight}=this.props;
      var d=disabled || loading?styles.disabled:{};
      var s=[styles.submit,style,d];
      var t=[styles.submitText,textStyle,d];
      switch (type) {
        case "hint":
          s=[styles.submitHint,icon?{justifyContent :'flex-start'}:{},d];
          t=[styles.submitTextHint,textStyle,d];
          break;
        case "text":
          s=[styles.submitWithoutBorder,d];
          t=[styles.submitText3,icon?{justifyContent :'flex-start'}:{},textStyle,d];
          break;
        case "border":
          s=[styles.submitBorder,icon?{justifyContent :'flex-start'}:{},d];
          t=[styles.submitTextBorder,textStyle,d];
          break;
        case "close":
          s=[styles.submitBorder,d];
          t=[styles.closeBtntext,d];
          break;
        case "valid":
          s=[styles.btnValid,d];
          t=[styles.validBtntext,d];
          break;
      }
      return(
        <TouchableOpacity disabled={disabled || loading} onPress={()=>press()} style={s}>
          {icon?null
            :null
          }
          {!loading?
            <Text style={t} >{text}</Text>
            :
            <Loading size={"Small"} margin={Pixel*14} color={loadColor?loadColor:"#fff"} show={true} />
          }
          {iconRight?<Icon 
            name={iconRight} 
            width={Pixel*12} 
            height={Pixel*14} 
            fill='#fff' />
            :null
          }
        </TouchableOpacity>
      );
  }
}
const styles=StyleSheet.create({
  submit:{
    flexDirection:"row",
    borderRadius: Pixel*2.7,
    backgroundColor: "#f25555",
    marginTop:Pixel*15,
    alignItems:'center',
    justifyContent: 'center',
  },
  submitHint:{
    flexDirection:"row",
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: Pixel*0.7,
    borderColor: "#aac1ca"
  },
  submitBorder:{
    flexDirection:"row",
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: Pixel*0.7,
    borderColor: "#aac1ca",
    borderRadius:Pixel*4,
    marginBottom:Pixel*5
  },
  submitWithoutBorder:{
    flexDirection:"row",
    alignItems:'center',
    justifyContent: 'center',
  },
  submitText:{
    fontSize: Pixel*12,
    fontWeight: "600",
    textAlign: "center",
    color: "#ffffff",
    padding: Pixel*10.7,
  },
  submitTextHint:{
    padding: Pixel*10.7,
    fontSize: Pixel*12,
    fontWeight: "600",
    color: "#8f9bb3"
  },
  submitText3:{
    padding: Pixel*10.7,
    fontSize: Pixel*9,
    fontWeight: "600",
    color: "#8f9bb3"
  },
  submitTextBorder:{
    padding: Pixel*10.7,
    fontSize: Pixel*9,
    fontWeight: "600",
    color: "#8f9bb3"
  },
  disabled:{
    opacity:0.5
  },
  closeBtntext:{
    padding: Pixel*8.7,
    fontSize: Pixel*9,
    fontWeight: "600",
    color: "#8f9bb3",
  },
  btnValid:{
    flexDirection:"row",
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: "#f25555",
    borderRadius:Pixel*4,
    marginBottom:Pixel*5
  },
  validBtntext:{
    paddingVertical: Pixel*8.7,
    paddingHorizontal: Pixel*20.7,
    fontSize: Pixel*9,
    fontWeight: "600",
    color: "#fff",
  },
});
export default Button;

