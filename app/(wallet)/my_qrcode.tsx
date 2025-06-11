import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QRCodeStyled from 'react-native-qrcode-styled';
import ScreenWrapper from '@/components/ScreenWrapper';
import HeaderLogin from '@/components/HeaderLogin';
const my_qrcode = () => {
  return (
    <ScreenWrapper>
                      <HeaderLogin props={{ title: "My Qrcode",back:false }} />
<View style={styles.continuer}>

      <Text>my_qrcode</Text>
<QRCodeStyled
  data={'Simple QR Code'}
  style={{backgroundColor: 'white'}}
  padding={20}
  pieceSize={8}
/>

</View>

    </ScreenWrapper>
  )
}

export default my_qrcode

const styles = StyleSheet.create({
continuer:{

    flex:1,
    flexDirection:'column'
}})