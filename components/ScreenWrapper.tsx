import { ScreenWrapperProps } from '@/types';
import React from 'react';
import { SafeAreaView, StyleSheet, View ,Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Shadow } from 'react-native-neomorph-shadows';

const ScreenWrapper = ({style,children}:ScreenWrapperProps  ) => {
    
  return (

<SafeAreaView style={[styles.container,style]}>

    <View style={[styles.container,style]}>

    <View style={styles.box} />

      {children}
    



    </View>
  
  </SafeAreaView>)
}
``
export default ScreenWrapper;

const styles = StyleSheet.create({
container:{ 
  flex:1,
},
box:{
  width:250,
  height:250,
  backgroundColor:'#1B56FD',
  position:'absolute',
  borderRadius:'50%',
  bottom:200,
    elevation: 1,  
  shadowColor: 'black',
},box2:{
  width:250,
  height:250,
  backgroundColor:'#1B56FD',
  position:'absolute',
  borderRadius:'50%',
  bottom:200,
  right:0,
    elevation: 1,  
}
})