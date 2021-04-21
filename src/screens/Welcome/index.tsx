import React from 'react';
import {SafeAreaView, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles'
import {images} from '../../constants';

import Button from '../../components/Button';

function WelcomeScreen() {
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas de{'\n'}
        forma fácil
      </Text>
      <Image
        source={images.watering} 
        style={styles.image} 
      />
      <Text style={styles.subTitle}>
        Não esqueça mais de regar suas plantas. 
        Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
      <Button title='>'/>
    </SafeAreaView>
  )
}

export default WelcomeScreen;