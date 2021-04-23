import {StyleSheet} from 'react-native' 
import fonts from '../../assets/fonts';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.shape,
    width: 76,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginRight: 5,
  },
  containerActive: {
    backgroundColor: COLORS.green_light
  },
  text: {
    color: COLORS.heading,
    fontFamily: fonts.text,
  },
  textActive: {
    fontFamily: fonts.heading,
    color: COLORS.green_dark,
  }
})

export default styles;