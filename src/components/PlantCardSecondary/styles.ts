import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: COLORS.shape,
  },
  title: {
    flex: 1,
    marginLeft: 10,
    color: COLORS.heading,
    fontFamily: fonts.heading,
    fontSize: 17
  },
  details: {
    alignItems: 'flex-end',
  },
  timeLabel: {
    fontSize: 16,
    fontFamily: fonts.text,
    color: COLORS.body_light, 
  },
  time: {
    marginTop: 5,
    fontSize: 16, 
    fontFamily: fonts.heading,
    color: COLORS.body_dark,
  },
  buttonRemove: {
    width: 100,
    height: 85,
    marginTop: 15,
    borderRadius: 20,
    paddingLeft: 10,
    position: 'relative',
    right: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.red,
  }
  
})

export default styles;