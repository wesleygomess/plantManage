import {StyleSheet} from 'react-native'
import fonts from '../../assets/fonts';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  emoji: {
    textAlign: 'center',
    fontSize: 78,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.heading,
    fontFamily: fonts.heading,
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    color: COLORS.heading,
    fontFamily: fonts.text,
    paddingVertical: 10,
    marginHorizontal: 20
  },
  footer: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 70
  }
})

export default styles;