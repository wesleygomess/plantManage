import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles'

import Button from '../../components/Button'
import { useRoute } from '@react-navigation/core';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😃'
}

function Confirmation({navigation}) {
  const routes = useRoute();
  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen,
  } = routes.params as Params

  function handleMoveOn(){
    navigation.navigate(nextScreen)
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>{emojis[icon]}</Text>

        <Text style={styles.title}> 
          {title}
        </Text>

        <Text style={styles.subtitle}> 
          {subtitle}
        </Text>

        <View style={styles.footer}>
          <Button onPress={handleMoveOn} title={buttonTitle}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Confirmation;