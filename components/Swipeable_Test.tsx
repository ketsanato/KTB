import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';

import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

function RightAction(prog: SharedValue<number>, drag: SharedValue<number>) {
  const styleAnimation = useAnimatedStyle(() => {
    console.log('showRightProgress:', prog.value);
    console.log('appliedTranslation:', drag.value);

    return {
      transform: [{ translateX: drag.value + 50 }],
    };
  });

  return (
    <Reanimated.View style={styleAnimation}>
      <Text style={styles.rightAction}>Text</Text>

    </Reanimated.View>
  );
}

const Swipeable_Test = () => {


  return (
<GestureHandlerRootView>

      <ReanimatedSwipeable
        containerStyle={styles.swipeable}
        friction={2}
        enableTrackpadTwoFingerGesture
        rightThreshold={40}
        renderRightActions={RightAction}>
          
        <Text>Swipe me!</Text>


      </ReanimatedSwipeable>

    </GestureHandlerRootView>  )
}

export default Swipeable_Test

const styles = StyleSheet.create({
  rightAction: { width: 50, height: 50, backgroundColor: 'purple' },
  separator: {
    width: '100%',
    borderTopWidth: 1,
  },
  swipeable: {
    height: 50,
    backgroundColor: 'papayawhip',
    alignItems: 'center',
  },
});