import { MyTabBar } from "@/components/TabBar";
import { Tabs } from "expo-router";
import React from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function TabLayout() {
  return (
    <>
      <Tabs
        tabBar={(props) => <MyTabBar {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
              tabBarIcon: ({ color }) => <MaterialIcons size={28} name="house.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="wallet"
          options={{
            title: "wallet",
          }}
        />
        <Tabs.Screen
          name="topup"
          options={{
            title: "topup",
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "profile",
          }}
        />   <Tabs.Screen
          name="map"
          options={{
            title: "Map",
          }}
        />
      </Tabs>
    </>
  );
}
