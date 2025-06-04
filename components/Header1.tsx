import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
const Header1 = ({props}) => {
    const router =useRouter();
  return (
  <Appbar.Header>
    <Appbar.BackAction onPress={() => router.back()} />
    <Appbar.Content title={props.title} />
  </Appbar.Header>
  )
}

export default Header1

const styles = StyleSheet.create({


})