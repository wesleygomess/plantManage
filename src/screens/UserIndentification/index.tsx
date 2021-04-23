import React, {useState} from 'react';
import {View, Text, SafeAreaView, TextInput, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import styles from './styles'

import Button from '../../components/Button'
import { COLORS } from '../../constants';

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

  function handleStart(){
    navigation.navigate('Confirmation')
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