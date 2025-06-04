import { ScreenWrapperProps } from '@/types';
import React from 'react';
import { StyleSheet, View } from 'react-native';




const ScreenWrapper = ({style,children}:ScreenWrapperProps  ) => {
    
  return (

    <View style={[styles.container,style]}>

    
    
      {children}
    



    </View>

  )
}

export default ScreenWrapper;

const styles = StyleSheet.create({
container:{
  flex:1,
  flexDirection:"column"
}
})