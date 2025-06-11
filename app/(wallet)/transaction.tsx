import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import HeaderLogin from '@/components/HeaderLogin'

const transaction = () => {
  return (
    <ScreenWrapper>
              <HeaderLogin props={{ title: "transaction",back:false }} />

      <Text>transaction</Text>
    </ScreenWrapper>
  )
}

export default transaction

const styles = StyleSheet.create({})