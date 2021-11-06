import { Dimensions, PlatformS } from 'react-native';
export const { height, width } = Dimensions.get('window');
export const device = Platform.OS;
export const Pixel = device == "ios" ? width / 280 : width / 260;


export const defautsOptions = [{ label: "Rayures / Griffes", value: 1 }, { label: "Chocs / Coups", value: 2 }];
export const carbColors = ["#fff", "#d6150b", "#db890d", "#9aad09", "#4bad09", "#096bad"];
export const Colors = {
  BLACK: '#000',
  BLUE: '#415df9',
  WHITE: '#ffffff',
  PINK:'#f0a3ee',
  PINK_INVALIDE:'#f9b9f6',
  YELLOW:'',
  RED:'#f25555',
  MARINE:'#222b45'
}
