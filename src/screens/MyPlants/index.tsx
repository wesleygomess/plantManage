import React, { useEffect, useState } from 'react';
import {View, Image, Text, FlatList, Alert} from 'react-native';
import styles from './styles';
import Header from '../../components/Header'
import { images } from '../../constants';
import { loadPlant, PlantProps, removePlant } from '../../libs/storage';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';
import PlantCardSecondary from '../../components/PlantCardSecondary';
import Load from '../../components/Load';

function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState<string>();

  function handleRemove(plant: PlantProps) {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [ 
      {
        text: 'Não 👏',
        style: 'cancel'
      },
      {
        text: 'Sim 😥',
        onPress: async () => {
          try{

            await removePlant(plant.id);

            setMyPlants((oldData) => 
              oldData.filter((item) => item.id !== plant.id)
            );

          }catch(error){
            Alert.alert('Não foi possível remover 😥')
          }
        }
      }
    ])
  }

  useEffect(() => {
    async function loadStorageData(){
      const plantsStoraged = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        {locale: pt}
      );

      setNextWatered(
        `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime} horas.`
      );
      setMyPlants(plantsStoraged);
    }

    loadStorageData();
    setLoading(false);
  }, [])

  if (loading)
      return <Load />
  return(
    <View style={styles.container}>
      <Header />

      <View style={styles.spotLight}>
        <Image 
          source={images.waterdrop}
          style={styles.spotLightImage}
        />
        {myPlants.length === 0 ? (
            <Text style={styles.spotLightText}>
              Nenhuma planta cadastrada.
            </Text>
          )
          : (
            <Text style={styles.spotLightText}>
              {nextWatered}
            </Text>
          )
        }
    
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsText}>
          Próximas regadas
        </Text>
        { myPlants.length !== 0 && 
          <FlatList 
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary 
              data={item} 
              handleRemove={() => handleRemove(item)}
            />
          )}
          contentContainerStyle={styles.myPlantList}
          showsVerticalScrollIndicator={false}
        />
        }
      </View>
    </View>
  )
}

export default MyPlants;