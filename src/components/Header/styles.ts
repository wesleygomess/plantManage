import {StyleSheet} from 'react-native' 
import fonts from '../../assets/fonts';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontFamily: fonts.text,
    color: COLORS.heading
  },
  userName:{
    fontSize: 36,
    fontFamily: fonts.heading,
    color: COLORS.heading
  },
  avatar: {
    height: 56,
    width: 56,
    borderRadius: 56 / 2
  }
})

export default styles;