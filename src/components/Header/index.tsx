import React from 'react';
import {View, Image, Text } from 'react-native';

import styles from './styles';

import {images} from '../../constants'

function Header(){
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Olá,</Text>
        <Text style={styles.userName}>Wesley</Text>
      </View>
      <Image 
        source={images.avatar}
        style={styles.avatar}
      />
    </View>
  )
}

export default Header;