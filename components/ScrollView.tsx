import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue
} from 'react-native-reanimated';
import { ScreenWrapperProps } from './types';


export default function ScrollExample({style,children}:ScreenWrapperProps ) {
  const offsetX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      offsetX.value = event.contentOffset.y;
    }
  });


  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView onScroll={scrollHandler}>
        
        {children}

      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    height: 150,
    shadowColor: 'black',
  }
});
