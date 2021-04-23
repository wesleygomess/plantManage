import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles'

import Button from '../../components/Button'

function Confirmation({navigation}) {

  function handleMoveOn(){
    navigation.navigate('Home')
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😄</Text>

        <Text style={styles.title}> 
          Prontinho
        </Text>

        <Text style={styles.subtitle}> 
          Agora vamos começar a cuidar das suas 
          plantinhas com muito cuidado.
        </Text>

        <View style={styles.footer}>
          <Button onPress={handleMoveOn} title='Começar'/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Confirmation;