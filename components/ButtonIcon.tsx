import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';

type ButtonIcon={
    text:string,
    iconName:string,
    icon: typeof MaterialIcons.defaultProps,
    size:Int32,
    color:string,  style?: ViewStyle;
    onPress:()=>void;
    
}
const ButtonIcon = ({icon,text,onPress,color,size,style}:RoundBtnProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={[styles.continuer,style]}>

<MaterialIcons name={icon} size={30} color={'black'} />


      <Text style={styles.text}>{text}</Text>
              </View>

    </TouchableOpacity>
  )
}

export default ButtonIcon

const styles = StyleSheet.create({
    continuer:{
    width:100,
    height:100,
    flexDirection:'column',
    backgroundColor:'white',
    padding:10,
    alignContent:'center',
    alignItems:'center'
    },text:{
        fontSize:10
    }
})