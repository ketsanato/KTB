import { LayoutAnimation, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import HeaderLogin from '@/components/HeaderLogin'
import { FlashList } from '@shopify/flash-list'
import Data from '@/data/carts.json'
import Swipeable_Test from '@/components/Swipeable_Test'
import { MeshGradientView } from 'expo-mesh-gradient';
const tranfer = () => {


  return ( <MeshGradientView
      style={StyleSheet.absoluteFill}
      columns={3}
      rows={3}
      colors={['#FF6B68', '#4ECDC4', '#4587D1', '#96CEB4', '#FFEEAD', '#D4A5A5', '#98D5DE', '#000BF9', '#F14BB5']}
      points={[
        [0.0, 0.0],
        [0.5, 0.0],
        [1.0, 0.0],
        [0.0, 0.5],
        [0.5, 0.5],
        [1.0, 0.5],
        [0.0, 1.0],
        [0.5, 1.0],
        [1.0, 1.0],
      ]}
      >
    <ScreenWrapper>
      <HeaderLogin props={{ title: "History",back:false }} />




    </ScreenWrapper>      </MeshGradientView>

  )
}

export default tranfer

const styles = StyleSheet.create({
  mash:{
flex:1
  }
})