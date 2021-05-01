import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: COLORS.shape
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.shape,
  },
  plantName: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: COLORS.heading,
    marginTop: 15,
  },
  plantAbout: {
    textAlign: 'center',
    fontFamily: fonts.text,
    color: COLORS.heading,
    marginTop: 10,
  },
  controller: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  tipContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.blue_light,
    padding: 20,
    borderRadius: 20,
    position: 'relative',
    bottom: 60
  },
  tipImage: {
    width: 56,
    height: 56,
  },
  tipText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: fonts.text,
    color: COLORS.blue,
    fontSize: 17,
    textAlign: 'justify',
  },
  alertLabel: {
    textAlign: 'center',
    fontFamily: fonts.complement,
    color: COLORS.heading,
    fontSize: 12,
    marginBottom: 5,
  },
  picker: {
    height: 95,
    marginVertical: 20
  },
  dateTimePickerButton: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20
  },
  dateTimePickerText: {
    textAlign: 'center',
    color: COLORS.heading,
    fontSize: 24,
    fontFamily: fonts.text,
  }
})

export default styles;