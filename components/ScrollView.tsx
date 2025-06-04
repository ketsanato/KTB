import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Animated, {
    useAnimatedProps,
    useAnimatedScrollHandler,
    useSharedValue,
} from 'react-native-reanimated';
import { ScreenWrapperProps } from './types';


export default function ScrollExample({style,children}:ScreenWrapperProps ) {
  const offsetX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      offsetX.value = event.contentOffset.y;
    }
  });

  const offsetAnimatedProps = useAnimatedProps(() => {
    return {
      text: `Scroll offset: ${Math.round(offsetX.value)}px`,
      defaultValue: `Scroll offset: ${offsetX.value}x`,
    };
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
    paddingHorizontal: 32,
  },
  header: {
    backgroundColor: '#f8f9ff',
    paddingVertical: 16,
    paddingHorizontal: 16,
    textAlign: 'center',
    fontFamily: 'Aeonik',
    color: '#001a72',
    marginTop: '-1px',
  },
  section: {
    height: 150,
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
