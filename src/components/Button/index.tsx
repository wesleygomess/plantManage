import React from 'react';
import {Text, TouchableOpacity, TouchableHighlightProps} from 'react-native';
import styles from './styles';
interface ButtonProps extends TouchableHighlightProps{
  title: String;
}

function Button({title, ...rest}: ButtonProps) {
  return(
    <TouchableOpacity 
      activeOpacity={0.7} 
      style={styles.button} 
      {...rest}
    >
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button;