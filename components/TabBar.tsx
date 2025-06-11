import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity, View,Text } from "react-native";
import Animated ,{interpolate,useSharedValue,useAnimatedStyle} from "react-native-reanimated";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export const MyTabBar = ({
  state,
  descriptors,
  navigation,position
}: BottomTabBarProps) => {
const icons={
  index:(props)=><MaterialIcons name="home" size={24} {...props} />,

  topup:(props)=><MaterialIcons name='paid' size={24} {...props} />,

  wallet:(props)=><MaterialIcons name="wallet" size={24} {...props} />,
  profile:(props)=><MaterialIcons name="person" size={24} {...props} />,
  map:(props)=><MaterialIcons name="map" size={24} {...props} />,


}

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
       const scale = useSharedValue(0);
    const animatedIconStyle = useAnimatedStyle(() => {
      const scaleValue = interpolate(scale.value, [0, 1], [0.8, 1]);
      const top = interpolate(scale.value, [0, 1], [0, -10]);
      return { transform: [{ scale: scaleValue }], top };
    });

        return (
          
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}
          >
             {
            icons[route.name]({
              color:isFocused? '#673ab7' : '#222',
            })
          }

        <Animated.Text style={{ animatedIconStyle, color: '#673ab7'}}>
       

          <Text> 
             {label}
            </Text>  
            </Animated.Text>

            
          </TouchableOpacity>
          
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 80,
    paddingVertical: 15,
    borderRadius: 35,
    borderCurve:'continuous',
     shadowColor: "#000",
     
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,   
elevation: 5,
  },
  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
