import {StyleSheet} from 'react-native'
import fonts from '../../assets/fonts';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    width: '100%'
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 54
  },
  emoji: {
    textAlign: 'center',
    fontSize: 44,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: COLORS.heading,
    fontFamily: fonts.heading,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: COLORS.gray,
    color: COLORS.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center'
  },
  footer: {
    marginTop: 40,
    width: '85%'
  }
})

export default styles;