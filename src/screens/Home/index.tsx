import React, { useEffect, useState } from 'react';
import {View, Text, FlatList} from 'react-native'
import styles from './styles';
import api from '../../services/api';

import Header from '../../components/Header' 
import EnviromentButton from '../../components/environmentButton';
import PlantCardPrimary from '../../components/PlantCardPrimary';
import Load from '../../components/Load';

interface EnviromentProps {
  key: String;
  title: String;
}

interface PlantProps {
  id: String;
  name: String;
  about: String;
  water_tips: String;
  photo: String;
  environments: [String];
  frequency: {
    times: number;
    repeat_every: String;
  }
}

function Home() {
  const [environments, setEnvironments] = useState<EnviromentProps[]>([])
  const [plants, setPlants] = useState<PlantProps[]>([])
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([])
  const [environmentsSelected, setEnvironmentsSelected] = useState('all')
  const [load, setLoad] = useState(true);

  function handleEnvironmentSelected(environment: string){
    setEnvironmentsSelected(environment)

    if (environment === 'all')
      return setFilteredPlants(plants);

    const filtered = plants.filter(plant => 
      plant.environments.includes(environment)
    )  

    setFilteredPlants(filtered)
  }

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api.get('plants_environments?_sort=title&_order=asc');
      setEnvironments([
        {
          key: 'all',
          title: 'Todos'
        },
        ...data
      ])
    }

    fetchEnviroment();
  }, [])

  useEffect(() => {
    async function fetchPlant() {
      const { data } = await api.get('plants?_sort=name&_order=asc');
      setPlants(data)
      setLoad(false)
    }

    fetchPlant();
  }, [])

  if (load)
      return <Load />
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Header/>
        <Text style={styles.title}>Em qual hambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>
      <View>
        <FlatList 
          data={environments}
          keyExtractor={(item) => `${item.key}` }
          renderItem={({ item }) => (
            <EnviromentButton 
              title={item.title} 
              active={item.key === environmentsSelected}
              onPress={() => handleEnvironmentSelected(String(item.key))}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
      </View>
      <View style={styles.plants}>
        <FlatList 
          data={filteredPlants}
          renderItem={({ item }) => (
            <PlantCardPrimary data={item}/>
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </View>
  );  
}

export default Home;
