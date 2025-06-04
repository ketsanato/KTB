import HeaderLogin from '@/components/HeaderLogin';
import ScreenWrapper from '@/components/ScreenWrapper';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
const map = () => {
  return (
    <ScreenWrapper>
      <HeaderLogin props={{ title: "Map" }} />

         <View>
      <Text>map</Text>
        <MapView style={styles.map} />
    </View> 
    </ScreenWrapper>

  )
}

export default map

const styles = StyleSheet.create({  container:{
    flex:1,
    justifyContent:'center'
    ,
    alignItems:'center'
  }, map: {
    width: '100%',
    height: '100%',
  },})