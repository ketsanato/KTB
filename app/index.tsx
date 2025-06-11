import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import { useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import Animated, { FadeIn, FadeOut, useSharedValue } from "react-native-reanimated";
import { enableLegacyWebImplementation } from 'react-native-gesture-handler';
enableLegacyWebImplementation(true);
export default function App() {
  const width = useSharedValue(() => {});

  const animation = useRef<LottieView>(null);

  const router = useRouter();

  useEffect(() => {
    animation.current?.play();

    setTimeout(() => {
      router.push("/(auth)/welcome");
    }, 3000);
  }, []);

  return (
    
    <Animated.View style={styles.animationContainer} entering={FadeIn} exiting={FadeOut}>
      <LottieView 
        autoPlay
        ref={animation}
        style={{
          width: 400,
          height: 200,
   
        }}
        source={require("@/assets/lottie/Visa.json")}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
        backgroundColor: "#b58df1",

  },
  box: {
    height: 100,
    backgroundColor: "#b58df1",
    borderRadius: 20,
    marginVertical: 64,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
