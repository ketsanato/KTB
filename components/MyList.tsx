import React from "react";
import { View, Text, StyleSheet,useEffect } from "react-native";
import { FlashList } from "@shopify/flash-list";
import Animated, { useSharedValue } from "react-native-reanimated";
const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
];

export const MyList = () => {
   const Item = ({ item }: { item: { id: string } }) => {
    const myValue = useSharedValue(0);
    useEffect(() => {
      // Reset value when id changes (view was recycled for another item)
      myValue.value = 0;
    }, [item.id, myValue]);
    return <Animated.View />;
  };


  return (

    <FlashList
      data={DATA} estimatedItemSize={100} 
      renderItem={({ item }) => (

        <Animated.View style={styles.section}><Text> {item.title}</Text></Animated.View>
      )}
    />
  );
};
const styles = StyleSheet.create({
  section: {
    width: "100%",
    height: 50,
    borderRadius: 20,
    marginTop: 10,
    backgroundColor: "#ffe780",
    padding: 10,
  },
});
