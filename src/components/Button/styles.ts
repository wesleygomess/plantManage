import {StyleSheet} from 'react-native'
import {COLORS} from '../../constants'

const styles = StyleSheet.create({
  button: {
    height: 56, 
    borderRadius: 16,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    fontSize: 16, 
    color: COLORS.white,
  }
})

export default styles;