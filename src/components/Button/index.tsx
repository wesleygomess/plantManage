import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface ButtonProps {
  title: String;
}

function Button({title}: ButtonProps) {
  return(
    <TouchableOpacity style={styles.button}>
      <Text style={styles.contentButton}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button;