import React from 'react';
import {View, Text, Animated } from 'react-native'
import { RectButton,  RectButtonProps } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import {SvgFromUri} from 'react-native-svg';
import { Feather } from '@expo/vector-icons';

import styles from './styles'

interface PlantProps extends RectButtonProps {
  data: {
    name: String;
    photo: String;
    hour: string;
  };
  handleRemove: () => void;
}

function PlantCardSecondary({data, handleRemove, ...rest}: PlantProps) {
  return(
    <Swipeable
      overshootLeft={false}
      renderRightActions={() => (
        <Animated.View>
          <RectButton 
            style={styles.buttonRemove}
            onPress={handleRemove}
          >
            <Feather name="trash" size={30} color='white'/>
          </RectButton>
        </Animated.View>
      )}
    >
      <RectButton 
        style={styles.container} 
        {...rest}
      >
        <SvgFromUri
          uri={`${data.photo}`}
          width={50}
          height={50}
        />
        <Text style={styles.title}>
          {data.name}
        </Text>

        <View style={styles.details}>
          <Text style={styles.timeLabel}>
            Regar às 
          </Text>
          <Text style={styles.time}>
            {data.hour}
          </Text>
        </View>
      </RectButton>
    </Swipeable>
  )
}

export default PlantCardSecondary;