import React from 'react';
import {View, Text } from 'react-native';
import {RectButton, RectButtonProps } from 'react-native-gesture-handler';
import styles from './styles';

interface EnviromentButtonProps extends RectButtonProps {
  title: String,
  active?: boolean
}

function EnviromentButton(
  {title, active = false, ...rest}: EnviromentButtonProps){
  return(
    <RectButton
      style={[
        styles.container,
        active && styles.containerActive
      ]}
      {...rest}
    >
      <Text style={[
          styles.text,
          active && styles.textActive
        ]}
      >
        {title}
      </Text>
    </RectButton>
  )
}

export default EnviromentButton;

