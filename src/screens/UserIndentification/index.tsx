import React, {useState} from 'react';
import {Alert, View, Text, SafeAreaView, TextInput, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import styles from './styles'

import Button from '../../components/Button'
import { COLORS } from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

function UserIndentification({navigation}) {
  const [name, setName] = useState<String>('');
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(false);
    setIsFocused(!!name)
  }

  function handleInputBlur() {
    setIsFocused(true);
  }

  function handleInputChange(value: String) {
    setIsFilled(!!value);
    setName(value);
  }

  async function handleStart(){
    if(!name)
     return Alert.alert('Ops!','Digite um nome para continuarmos.');
     
     try{
      await AsyncStorage.setItem('@app-plantManager:user', String(name));
      navigation.navigate('Confirmation', {
        title: 'Protinho',
        subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
        buttonTitle: 'Começa',
        icon: 'smile',
        nextScreen: 'Home'
      }); 
     }catch{
        Alert.alert('Ops!','Não foi possivel salver o seu nome.');
     }
  
  }

  return(
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
      <View style={styles.content}>
        <View style={styles.form}>
          <View>
            <Text style={styles.emoji}>{isFilled ? '😄' : '😃'}</Text>
            <Text style={styles.title}> 
              Como podemos {'\n'}
              chamar você?
            </Text>
          </View>

          <TextInput
            style={[
              styles.input,
              (isFocused || isFilled) && {borderColor: COLORS.green}
            ]} 
            // value={name}
            placeholder='Digite um nome'
            onChangeText={handleInputChange}
            onBlur={handleInputFocus}
            onFocus={handleInputBlur}
          />

          <View style={styles.footer}>
            <Button onPress={handleStart} title='Confirmar'/>
          </View>
        </View>
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default UserIndentification;