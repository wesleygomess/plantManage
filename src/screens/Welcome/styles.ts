import {StyleSheet, Dimensions} from 'react-native'
import {COLORS} from '../../constants'
import fonts from '../../assets/fonts'

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    color: COLORS.heading,
    textAlign: 'center',
    marginTop: 10,
    fontFamily: fonts.heading
  },
  image: {
    height: width * 0.7,
  },
  subTitle: {
    fontSize: 17, 
    color: COLORS.heading,
    textAlign: 'center',
    fontFamily: fonts.text,
    lineHeight: 25
  },
  button: {
    height: 56, 
    width: 56, 
    backgroundColor: COLORS.green,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30, 
    color: '#fff', 
  }
})

export default styles;