import { ScreenWrapperProps } from '@/types';
import React from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const ScreenForm = ({style,children}:ScreenWrapperProps  ) => {
    
  return (
    <>
    
<KeyboardAvoidingView style={[styles.container,style]}>
     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        {children}

</TouchableWithoutFeedback>
</KeyboardAvoidingView>

    
    





      
   </>
 )
}

export default ScreenForm;

const styles = StyleSheet.create({
   container: {
flex:1,
padding:10,     flexDirection: 'column',
  } 

})