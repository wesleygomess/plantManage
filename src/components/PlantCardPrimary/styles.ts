import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '45%',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    margin: 10,
    backgroundColor: COLORS.shape
  },
  name: {
    color: COLORS.green_dark,
    fontFamily: fonts.heading,
    marginVertical: 16,
  },
  image: {
    width: 70, 
    height: 70,
  }
})

export default styles;