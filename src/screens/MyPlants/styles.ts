import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.background
  },
  spotLight: {
    backgroundColor: COLORS.blue_light,
    paddingHorizontal: 20,
    borderRadius: 20,
    height: 110,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  spotLightImage: {
    width: 60,
    height: 60
  },
  spotLightText: {
    flex: 1,
    color: COLORS.blue,
    paddingHorizontal: 20,
    textAlign: 'left'
  },
  plants: {
    flex: 1,
    width: '100%'
  },
  plantsText: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: COLORS.heading,
    marginVertical: 20,
  },
  myPlantList: {

  }
})

export default styles;