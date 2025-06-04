import * as React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import { InputProps } from "./types";
const Input_New = (...props: InputProps) => {
  return (
    <View style={[styles.container, props.inputStyle && props.containerStyle]}>
      
      <TextInput
        style={[styles.input, props.inputStyle]}
        placeholderTextColor="#782aeb"
        ref={props.inputRef && props.inputRef}
        mode="outlined"
      />
    </View>
  );
};

export default Input_New;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 54,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderCurve: "continuous",
    paddingHorizontal: 1,
    gap: 1,
    margin: 5,
  },
  input: {
    color: "white",
    fontSize: 14,
  },
});
