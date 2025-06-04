import React, { useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import { icons } from "../constants/icons";
const TabBarButton = ({
  onPress,
  onLongPress,
  isFocused,
  routeName,
  color,
  label,
}: {
  onPress: Function;
  onLongPress: Function;
  isFocused: boolean;
  routeName: string;
  color: string;
  label: string;
}) => {
  const scale = useSharedValue(0);
  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : 0,
      {
        damping: 20,
        stiffness: 90,
        mass: 0.5,
      }
    );
  }, [scale, isFocused]);

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [0.5, 1]);
    return { opacity };
  });
  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [0.8, 1]);
    const top = interpolate(scale.value, [0, 1], [0, -10]);
    return { transform: [{ scale: scaleValue }], top };
  });

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabbarItem}
    >
      <Animated.View style={animatedIconStyle}>
        <icons[routeName]
          width={24}
          height={24}
          fill={isFocused ? color : "#222"}
        />
      </Animated.View>

      <Animation.Text
        style={[{ color: isFocused ? color : "#222" }, animatedTextStyle]}
      >
        {label}
      </Animation.Text>
    </Pressable>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
