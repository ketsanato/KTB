import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Appbar, IconButton, MD3Colors } from "react-native-paper";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Header1 = ({ props }) => {
  const router = useRouter();
  const [userLogin,setUserLogin]=useState(false)

  return (
    <View style={styles.container}>
  {(props.back==true) ? (  <Image
        style={styles.tinyLogo}
        source={require("@/assets/images/react-logo.png")}
      />) : (  <IconButton
        icon='arrow-back-circle-sharp'
        iconColor={MD3Colors.error50}
        size={20}
        onPress={() => router.back()}
      />) }
  
      <Text style={styles.titleHeader}> {props.title}</Text>
    {(!userLogin) ? (  <IconButton
        icon="account"
        iconColor={MD3Colors.error50}
        size={20}
        onPress={() => router.push('/(auth)/register')}
      />) : (  <IconButton
        icon="logout"
        iconColor={MD3Colors.error50}
        size={20}
        onPress={() => router.push('/(auth)/login')}
      />) }

    </View>
  );
};

export default Header1;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    elevation: 5,
    padding: 1,
    alignItems: "center",
    backgroundColor: "white",
    blurRadius: "15px",
    spreadDistance: "10px",
  },
  tinyLogo: {
    width: 50,
    height: 50,
    shadowColor: "black",
    borderRadius: 1,
    elevation: 1,
  },
  titleHeader: {
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
  },
  rightIcon: {
    padding: 10,
    alignItems: "right",
  },
});
