import { InputProps } from "@/types";
import React from "react";
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableWithoutFeedback, View } from "react-native";

const Input = (props: InputProps) => {
  return (

     <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  <View style={styles.inner}>
      <TextInput


        style={[styles.input, props.inputStyle]}
        placeholderTextColor="#EEE8"
        ref={props.inputRef && props.inputRef}
        
      /></View>
            </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});