import {StyleSheet} from 'react-native'
import {COLORS} from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.heading,
    textAlign: 'center'
  },
  image: {
    width: 292.13, 
    height: 284.3
  },
  subTitle: {
    fontSize: 17, 
    color: COLORS.heading,
    textAlign: 'center'
  }
})

export default styles;