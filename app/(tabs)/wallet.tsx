import ButtonIcon from "@/components/ButtonIcon";
import HeaderLogin from "@/components/HeaderLogin";
import RaoundButton from "@/components/RaoundButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from 'expo-image';
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View,ImageBackground, LogBox } from "react-native";
import { Avatar, Button, Card, FAB, IconButton, MD3Colors, Surface, Text } from "react-native-paper";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import Animated, { useAnimatedRef, useDerivedValue, useSharedValue } from "react-native-reanimated";
import { set } from "zod/v4";

export default function Wallet() {
  const [AUTOKE, setAUTOKEN] = useState('');
  const [data,setData]=useState('');
  const router=useRouter();
  const [walletBalance, setWalletBalance] = useState('');
  const [walletCurrency, setWalletCurrency] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('2077977441');
    const [fullName, setFullName] = useState('Ketsana Boumkham');

  
  const setStringValue = async (keyName, value) => {
      await AsyncStorage.setItem(keyName, value);
      // save error
  };

  const getMyStringValue = async () => {
await AsyncStorage.getItem("@KKP_AUTH_TOKEN");

  };

  const loginKKP = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      memberId: process.env.EXPO_PUBLIC_KKP_memberId,
      memberPassword: process.env.EXPO_PUBLIC_KKP_memberPassword,
      loginKey: process.env.EXPO_PUBLIC_KKP_loginKey,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    const result = await fetch(
      `${process.env.EXPO_PUBLIC_KKP_URL}/member/login`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const jsonValue = JSON.stringify(result.responseObj);

        setStringValue("@KKP_AUTH_TOKEN", jsonValue);
      })
      .catch((error) => console.error(error));
  };

  const WalletBalance = async () => {
    const myHeaders = new Headers();
loginKKP
    const a = JSON.parse(await AsyncStorage.getItem("@KKP_AUTH_TOKEN"))

    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("AUTH_TOKEN", `${a.memberToken}`);
   
    const raw = JSON.stringify({
      memberId: "WHATDAY",
      custMobile: "2077977441",
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(
      "https://kkuat.kokkokpay.com/member-api-service/v1.0.1/inquiry/balance/customer",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setWalletBalance(result.responseObj.walletBalance);
        setWalletCurrency(result.responseObj.walletCurrency);
      })
      .catch((error) => console.error(error));
  };
const LeftContent = props => <Avatar.Icon {...props} icon="wallet" />
  return (
    <ScreenWrapper>
      <HeaderLogin props={{ title: "Wallet",back:true }} />

      <View style={styles.container}>
        
  <Card>
   
    
     <Card.Title title="Wallet ID: 1112-1114-1244-566" subtitle="Wallet Type: Member" left={LeftContent} />
    <Card.Content>

      <Text variant="titleMedium">Phonenumber: {phoneNumber}</Text>
            <Text variant="titleMedium">Fullname: {fullName}</Text>

      <Text variant="titleMedium">Balance: {walletBalance}</Text>
    </Card.Content>
    <Card.Actions>
     <Button icon="refresh" mode="contained" onPress={WalletBalance}>
          WalletBalance
        </Button>
            </Card.Actions>
  </Card>   

<View style={styles.continuer2}>
     <Animated.ScrollView horizontal>

<ButtonIcon style={styles.surface}  icon='history' text="History" onPress={()=> router.push('/(wallet)/tranfer')}    />

  <ButtonIcon style={styles.surface} icon='payments' text="Transaction" onPress={()=> router.push('/(wallet)/transaction')}   />

  <ButtonIcon style={styles.surface} icon='qr-code' text="My QR" onPress={()=> router.push('/(wallet)/my_qrcode')}   />

              </Animated.ScrollView>

</View>




      </View>
        <FAB
    icon={"qrcode-scan"}
    style={styles.fab}
    onPress={() => router.push("/(qrcode)/qrcode")}
  />
      
    
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    flexDirection:'column'
  },
  continuer2:{
    
flexDirection:'row-reverse',
width:'100%',
height:100,
padding:10,
     shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 10,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 10,
        alignItems: 'center',

  }, surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:5,
    borderRadius:10
  },
  card:{
    width:'100%',
    height:'10%'

  }, image: {
    width: '100%',
    height:'20%',
    textAlign:'center'

  },fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 60,
    elevation: 2,
    padding:10,

  },

});
