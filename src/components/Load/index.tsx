import React from 'react';
import { View} from 'react-native';
import LottieView from 'lottie-react-native'

import { images } from '../../constants';

import styles from './styles';

function Load() {
  return(
    <View style={styles.container}>
        <LottieView 
          source={images.load}
          autoPlay
          loop
          style={styles.animation}
        />
    </View>
  )
}

export default Load;