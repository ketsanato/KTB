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
            animation: 'fade'}}
        />
        <Tabs.Screen
          name="wallet"
          options={{
            title: "wallet", animation: 'fade',
          }}
        />
        <Tabs.Screen
          name="topup"
          options={{
            title: "topup", animation: 'fade',
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "profile", animation: 'fade',
          }}
        />   <Tabs.Screen
          name="map"
          options={{
            title: "Map", animation: 'fade',
          }}
        />
      </Tabs>
    </>
  );
}
