import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

type RoundBtnProps={
    text:string,
    icon:typeof MaterialIcons.defaultProps,
    onPress:()=>void;
}
const RaoundButton = ({icon,text,onPress}:RoundBtnProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={[styles,styles]}>

{icon}
      <Text>{text}</Text>      </View>

    </TouchableOpacity>
  )
}

export default RaoundButton

const styles = StyleSheet.create({})