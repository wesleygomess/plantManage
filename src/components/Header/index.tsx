import React, {useEffect, useState} from 'react';
import {View, Image, Text } from 'react-native';

import AsyncStorage  from '@react-native-async-storage/async-storage'

import styles from './styles';

import {images} from '../../constants'

function Header(){
  const [userName, setUserName] = useState<String>()

  useEffect(() => {
    async function getNameUser() {
      const name = await AsyncStorage.getItem('@app-plantManager:user');
      setUserName(name);
    }

    getNameUser()
  }, [userName]);

  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <Image 
        source={images.avatar}
        style={styles.avatar}
      />
    </View>
  )
}

export default Header;