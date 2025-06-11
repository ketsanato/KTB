import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import data from '@/data/carts.json'
export const MySelection = () => {


  const content = data.map((item, index) => (
    <TouchableOpacity>
      <Animated.View
        key={index}
        entering={FadeInDown.delay(index * 50)
          .springify()
          .damping(14)}
        style={[
          styles.section,
          {
            backgroundColor: "#b58df1",
          },
        ]}
      >
        
        <Text> {item.id}</Text>
      </Animated.View>
    </TouchableOpacity>
  ));

  return (
<>
 {content}
</>

)
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },

  section: {
    width: "100%",
    height: 50,
    borderRadius: 20,
    marginTop: 10,
    shadowOffset: { width: 0, height: -27 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    shadowColor: "grey",
  },
});
