import React, {useState} from 'react';
import {View, Text, Image, Platform, TouchableOpacity, Alert, ScrollView } from 'react-native';
import {SvgFromUri} from 'react-native-svg';
import {useRoute} from '@react-navigation/native';
import DateTimePicker, {Event} from '@react-native-community/datetimepicker'
import { format, isBefore } from 'date-fns';

import Button from '../../components/Button';
import {images} from '../../constants'
import {PlantProps, savePlant, loadPlant} from '../../libs/storage'

import styles from './styles'

interface Params {
  plant: PlantProps
}

function PlantSalve({navigation}){
  const [selectedDateTime, setSelectedDateTime] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios')

  const route = useRoute()
  const {plant} = route.params as Params;

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === 'android') {
      setShowDatePicker(oldState => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert('Ops! hora não permitida', 'Selecione uma hora no futuro ⏰');
    }

    if(dateTime)
      setSelectedDateTime(dateTime);
  }

  function handleOpenDataPickerFromAndroid() {
    setShowDatePicker(oldState => !oldState)
  }

  async function handleSavePlant() {
    try{
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime
      });

      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar de sua platinha com muito cuidado.',
        buttonTitle: 'Muito obrigado :D',
        icon: 'hug',
        nextScreen: 'MyPlants'
      }); 

    } catch {
      Alert.alert('Ops!', 'Não foi possível salvar.');
    }
  }

  return(
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.plantInfo}>
          <SvgFromUri 
            uri={plant.photo}
            height={150}
            width={150}
          />

          <Text style={styles.plantName}>
            {plant.name}
          </Text>
          <Text style={styles.plantAbout}>
            {plant.about}
          </Text>
        </View>

        <View style={styles.controller}>
          <View style={styles.tipContainer}>
            <Image 
              source={images.waterdrop}
              style={styles.tipImage}
            />
            <Text style={styles.tipText}>
              {plant.water_tips} 
            </Text>

          </View>
            <Text style={styles.alertLabel}>
              Escolha o melhor horário para se lembrado:
            </Text>

            { showDatePicker && (
              <DateTimePicker 
                style={styles.picker}
                value={selectedDateTime}
                mode='time'
                display='spinner'
                onChange={handleChangeTime}
              />
            )}

            {Platform.OS === 'android' && (
              <TouchableOpacity 
                style={styles.dateTimePickerButton}
                onPress={handleOpenDataPickerFromAndroid}
              >
                <Text style={styles.dateTimePickerText}>
                  {`Mudar ${format(selectedDateTime, 'HH:mm')}`} 
                </Text>
              </TouchableOpacity>
            )}

            <Button
              title='Cadastrar planta'
              onPress={handleSavePlant}
            />
        </View>
      </View>
    </ScrollView>
  )
} 

export default PlantSalve;