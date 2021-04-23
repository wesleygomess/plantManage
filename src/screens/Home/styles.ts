import {StyleSheet, StatusBar} from 'react-native' 
import fonts from '../../assets/fonts';
import { COLORS } from '../../constants';

const heightStatusBar = StatusBar.currentHeight

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: heightStatusBar,
  },
  header: {
    paddingHorizontal: 20,
  },
  title: {
    marginTop: 20,
    fontSize: 17,
    lineHeight: 20,
    fontFamily: fonts.heading,
    color: COLORS.heading,
  },
  subtitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    lineHeight: 20,
    color: COLORS.heading,
  },
  list: {
    paddingLeft: 20,
    paddingVertical: 20,
  },
  plants: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
})

export default styles;