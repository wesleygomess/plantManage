import {StyleSheet} from 'react-native'
import {COLORS} from '../../constants'

const styles = StyleSheet.create({
  button: {
    height: 56, 
    width: 56, 
    backgroundColor: COLORS.green,
    borderRadius: 16
  },
  contentButton: {
    fontSize: 40, 
    color: '#fff', 
    textAlign: 'center' 
  }
})

export default styles;