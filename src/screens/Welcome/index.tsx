import React from 'react';
import {SafeAreaView, Text, Image, TouchableOpacity, View} from 'react-native';

import styles from './styles'
import {Entypo} from '@expo/vector-icons'
import {images} from '../../constants';

function WelcomeScreen({navigation}) {

  function handleStart(){
    navigation.navigate('UserIndentification')
  }
 
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Text>
        <Image
          source={images.watering} 
          style={styles.image} 
          resizeMode='contain'
        />
        <Text style={styles.subTitle}>
          Não esqueça mais de regar suas {'\n'} plantas. 
          Nós cuidamos de lembrar você{'\n'}
          sempre que precisar.
        </Text>
        <TouchableOpacity 
          onPress={handleStart}
          activeOpacity={0.7} 
          style={styles.button}
        >
        <Text style={styles.buttonText}>
          <Entypo name='chevron-thin-right' size={20}/>
        </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen;