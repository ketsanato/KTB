import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as ScreenOrientation from 'expo-screen-orientation';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import {
  PaperProvider
} from "react-native-paper";
import "react-native-reanimated";
import { KeyboardProvider } from 'react-native-keyboard-controller';
export function Main() {

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      ></Stack>
    </>
  );
}

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
 useEffect( ()=>{
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
      if (loaded) {
      SplashScreen.hideAsync();
    }
},[loaded]);
 if (!loaded) {
    return null;
  }
  return (
    <>

      <PaperProvider>

        <Main />
      </PaperProvider>

         <StatusBar style="auto" />

    </>
  );
}



