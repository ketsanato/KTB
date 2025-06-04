import { HStack } from "@react-native-material/core";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import { useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function App() {
  const animation = useRef<LottieView>(null);
  const router = useRouter();
  useEffect(() => {
    animation.current?.play();
  }, []);
  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#eee",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("@/assets/lottie/Welcome.json")}
      />
      <Text>Welcome to the App</Text>
      <Text>Welcome to my app </Text>
      <Text></Text>
      
      <HStack m={4} spacing={6}>
        <Button
          icon="camera"
          mode="elevated"
          onPress={() => router.push("(auth)/login")}
          
        >
          Login{" "}
        </Button>

        <Button
          icon="camera"
          mode="elevated"
          onPress={() => router.push("(auth)/register")}
        >
          Register
        </Button>
      </HStack>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
