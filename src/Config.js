import { Dimensions ,PlatformS} from 'react-native';
export const {height, width} = Dimensions.get('window');
export const device=Platform.OS;
export const Pixel=device=="ios"?width/280:width/260;


