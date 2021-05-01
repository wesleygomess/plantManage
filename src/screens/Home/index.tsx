import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native'
import styles from './styles';
import api from '../../services/api';

import Header from '../../components/Header' 
import EnviromentButton from '../../components/environmentButton';
import PlantCardPrimary from '../../components/PlantCardPrimary';
import Load from '../../components/Load';
import { COLORS } from '../../constants';
import { PlantProps } from '../../libs/storage';
interface EnviromentProps {
  key: String;
  title: String;
}

function Home({navigation}) {
  const [environments, setEnvironments] = useState<EnviromentProps[]>([])
  const [plants, setPlants] = useState<PlantProps[]>([])
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([])
  const [environmentsSelected, setEnvironmentsSelected] = useState('all')
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  function handleEnvironmentSelected(environment: string){
    setEnvironmentsSelected(environment)

    if (environment === 'all')
      return setFilteredPlants(plants);

    const filtered = plants.filter(plant => 
      plant.environments.includes(environment)
    )  

    setFilteredPlants(filtered)
  }

  async function fetchPlants() {
    const { data } = await api
    .get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);

    if (!data)
      return setLoad(true);
    
    if (page > 1) {
      setPlants(oldValues => [...oldValues, ...data]);
      setFilteredPlants(oldValues => [...oldValues, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }

    setLoad(false);
    setLoadingMore(false);
  }

  function handleFetchMore(distance: number){
    if (distance < 1)
      return;

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);  
    fetchPlants();
  }

  function handlePlantSelect(plant: PlantProps) {
    navigation.navigate('PlantSalve', {plant})
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
    fetchPlants();
  }, [])

  if (load)
      return <Load />
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Em qual hambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>
      <View>
        <FlatList 
          data={environments}
          keyExtractor={(item) => String(item.key) }
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
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardPrimary data={item} onPress={() => handlePlantSelect(item)}/>
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => 
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore &&
              <ActivityIndicator color={COLORS.green} size='small' />
          }
        />
      </View>
    </View>
  );  
}

export default Home;
